import React from "react";
import { useNavigate } from "react-router-dom";

const ListItem = ({ fruits, productId }) => {
  const pre = fruits.data();
  const navigate = useNavigate();

  return (
    <>
      <tr className="ListItem">
        <td>{productId}</td>
        <td>{pre.name}</td>
        <td>{pre.color}</td>
        <td>{pre.stock}</td>
        <td>
          <button onClick={() => navigate(`/list/${productId}`)}>
            상세정보
          </button>
        </td>
      </tr>
    </>
  );
};

export default React.memo(ListItem);
