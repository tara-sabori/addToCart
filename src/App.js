import { Route, Routes } from "react-router-dom";
import "./index.css"
import SingleProduct from "./pages/products/single-product/SingleProduct";
import Carts from "./pages/carts/Carts";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";

function App() {
  const { myTheme } = useSelector(
    (state) => state.theme
);
  return (
    <div className={`${myTheme} App bg-backgroundapp`}>
    <Routes>
      <Route path="/products" element={<ProductsPage />}>
        <Route path=":id" element={<SingleProduct />} />
      </Route>
      <Route path="/carts" element={<Carts />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    </div>
  );
}

export default App;
