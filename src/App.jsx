import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../src/Apis/api";
import { setDataProduct } from "./redux/ProductSlide";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch(getProduct);
      const resData = await res.json();
      dispatch(setDataProduct(JSON.parse(resData)));
    })();
  }, []);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
