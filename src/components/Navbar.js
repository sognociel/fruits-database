import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/list">리스트</Link>
          <Link to="/add">추가</Link>
          <Link to="/info">정보</Link>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
