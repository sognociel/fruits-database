import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FunctionContext } from "../App";

const DetailInfo = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { getOneFruits, updateFruit, deleteFruit } =
    useContext(FunctionContext);
  const [oneData, setOneData] = useState({});

  async function getOneData() {
    const data = await getOneFruits(productId);
    setOneData(data);
  }

  useEffect(() => {
    getOneData();
  }, [productId]);

  return (
    <div className="DetailInfo">
      <h3>{oneData.name} 상품 상세 페이지</h3>
      <button className="before-btn" onClick={() => navigate(-1)}>
        이전페이지
      </button>
      <label>
        이름{" "}
        <input
          type="text"
          name="name"
          value={oneData.name || ""}
          onChange={(e) =>
            setOneData({ ...oneData, [e.target.name]: e.target.value })
          }
        />
      </label>
      <label>
        계절{" "}
        <input
          type="text"
          name="season"
          value={oneData.season || ""}
          onChange={(e) =>
            setOneData({ ...oneData, [e.target.name]: e.target.value })
          }
        />
      </label>
      <label>
        색상{" "}
        <input
          type="text"
          name="color"
          value={oneData.color || ""}
          onChange={(e) =>
            setOneData({ ...oneData, [e.target.name]: e.target.value })
          }
        />
      </label>
      <label>
        재고{" "}
        <input
          type="text"
          name="stock"
          value={oneData.stock || ""}
          onChange={(e) =>
            setOneData({
              ...oneData,
              [e.target.name]: e.target.value,
            })
          }
        />
      </label>
      <label>
        &nbsp;&nbsp;&nbsp;&nbsp;맛{" "}
        <input
          type="text"
          name="taste"
          value={oneData.taste || ""}
          onChange={(e) =>
            setOneData({ ...oneData, [e.target.name]: e.target.value })
          }
        />
      </label>
      <label>
        가격{" "}
        <input
          type="text"
          name="price"
          value={oneData.price || ""}
          onChange={(e) =>
            setOneData({
              ...oneData,
              [e.target.name]: e.target.value,
            })
          }
        />
      </label>
      <div className="DetailInfo-btn">
        <button
          onClick={() => {
            updateFruit(productId, oneData);
            navigate("/list");
          }}
        >
          수정
        </button>
        <button
          onClick={() => {
            if (window.confirm(`해당 상품을 삭제하시겠습니까?`)) {
              alert(`삭제를 완료했습니다.`);
              deleteFruit(productId);
              navigate("/list");
            } else {
              alert(`삭제를 취소합니다.`);
            }
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default React.memo(DetailInfo);
