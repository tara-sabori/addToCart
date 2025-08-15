import { Route, Routes } from "react-router-dom";
import "./index.css"
import Carts from "./pages/carts/Carts";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import ProfileProduct from "./pages/products/product-profile/ProfileProduct";
import Header from "./components/header/Header";

function App() {
  const { myTheme } = useSelector(
    (state) => state.theme
  );
  return (
    <div className={`${myTheme} App bg-backgroundapp`}>
      <Header />
      <div className="pt-20">
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
