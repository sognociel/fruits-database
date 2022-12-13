import React, { useState, useContext } from "react";
import { FunctionContext } from "../App";

const Add = () => {
  const initData = {
    name: "",
    season: "",
    color: "",
    stock: "",
    taste: "",
    price: "",
  };
  const { createFruit } = useContext(FunctionContext);
  const [input, setInput] = useState(initData);

  const addFruit = () => {
    if (
      !input.name ||
      !input.season ||
      !input.color ||
      !input.stock ||
      !input.taste ||
      !input.price
    ) {
      alert(`빈칸을 다 채워주세요`);
      return;
    }
    createFruit(input);
    setInput(initData);
    alert(`상품을 성공적으로 추가했습니다`);
  };

  return (
    <div className="Add">
      <h3>🍒과일 데이터베이스🍒</h3>
      <label>
        이름{" "}
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
      </label>
      <label>
        계절{" "}
        <input
          type="text"
          name="season"
          value={input.season}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
      </label>
      <label>
        색상{" "}
        <input
          type="text"
          name="color"
          value={input.color}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
      </label>
      <label>
        재고{" "}
        <input
          type="text"
          name="stock"
          value={input.stock}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
      </label>
      <label>
        &nbsp;&nbsp;&nbsp;&nbsp;맛{" "}
        <input
          type="text"
          name="taste"
          value={input.taste}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
      </label>
      <label>
        가격{" "}
        <input
          type="text"
          name="price"
          value={input.price}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
      </label>
      <button onClick={addFruit}>추가</button>
    </div>
  );
};

export default React.memo(Add);
