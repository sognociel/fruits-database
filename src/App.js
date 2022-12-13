import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./App.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Add from "./components/Add";
import Infomation from "./components/Infomation";
import DetailInfo from "./components/DetailInfo";
import Mypage from "./components/Mypage";
import { uid } from "./utils/randomId";
import { db } from "./Firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  getDoc,
} from "firebase/firestore";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// data Context
export const DataContext = React.createContext();
// 함수 Context
export const FunctionContext = React.createContext();

function App() {
  // 전체 데이터 관리
  const [data, setData] = useState([]);
  // db 컬렉션 연결
  const fruitCollection = collection(db, "fruits");

  // 전체 데이터 가져오기
  async function getFruits() {
    const data = await getDocs(fruitCollection);
    setData(data.docs);
  }
  useEffect(() => {
    getFruits();
  }, [data.length]);

  // 일부 데이터 가져오기
  const getOneFruits = useCallback(async (searchId) => {
    const docRef = doc(fruitCollection, searchId);
    const data = await getDoc(docRef);
    if (data.exists()) {
      return data.data();
    }
  }, []);

  // 데이터 추가하기
  const createFruit = useCallback(async (input) => {
    const ID = uid();
    const newData = {
      name: input.name,
      season: input.season,
      stock: parseInt(input.stock),
      color: input.color,
      taste: input.taste,
      price: parseInt(input.price),
    };
    await setDoc(doc(fruitCollection, ID), newData);
    setData([...data, newData]);
  }, []);

  // 데이터 수정하기
  const updateFruit = useCallback(async (productId, data) => {
    const updateData = {
      name: data.name,
      season: data.season,
      stock: parseInt(data.stock),
      color: data.color,
      taste: data.taste,
      price: parseInt(data.price),
    };
    await updateDoc(doc(fruitCollection, productId), updateData);
    getFruits();
  }, []);

  // 데이터 삭제하기
  const deleteFruit = useCallback(async (productId) => {
    await deleteDoc(doc(fruitCollection, productId));
    getFruits();
  }, []);

  // 필드 삭제 후 업데이트
  const deleteFieldFruit = useCallback(async (productId, deleteField) => {
    await updateDoc(doc(fruitCollection, productId), {
      deleteField: deleteField(),
    });
  }, []);

  const memoizedFunctions = useMemo(() => {
    return {
      getOneFruits,
      createFruit,
      updateFruit,
      deleteFruit,
      deleteFieldFruit,
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <DataContext.Provider value={data}>
          <FunctionContext.Provider value={memoizedFunctions}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<List />} />
              <Route path="/list/:productId" element={<DetailInfo />} />
              <Route path="/add" element={<Add />} />
              <Route path="/info" element={<Infomation />} />
              <Route path="/mypage" element={<Mypage />} />
            </Routes>
          </FunctionContext.Provider>
        </DataContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
