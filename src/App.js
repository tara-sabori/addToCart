import { Route, Routes } from "react-router-dom";
import "./index.css"
import Carts from "./pages/carts/Carts";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import ProfileProduct from "./pages/products/product-profile/ProfileProduct";
import Header from "./components/header/Header";
import { useEffect } from "react";
import ScrollToTop from "./components/scroll-top/ScrollToTop";

function App() {
  const { myTheme } = useSelector(
    (state) => state.theme
  );

  useEffect(()=>{
    document.body.classList=myTheme;
  },[myTheme])

  return (
    <div className={`App bg-backgroundapp`}>
      <ScrollToTop />
      <Header />
      <div>
        <Routes>
          <Route path="/products" element={<ProductsPage />}>
            <Route path=":id" element={<ProfileProduct />} />
          </Route>
          <Route path="/carts" element={<Carts />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
