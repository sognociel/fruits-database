import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "../App";

const List = () => {
  const data = useContext(DataContext);
  return (
    <div className="List">
      <h3>전체 상품 리스트</h3>
      <table>
        <thead>
          <tr>
            <th>코드번호</th>
            <th>상품명</th>
            <th>색상</th>
            <th>수량</th>
            <th>상세정보</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <ListItem key={item.id} fruits={item} productId={item.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(List);
