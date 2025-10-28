import { useEffect } from "react";
import MainFeatures from "../../components/home/feature/MainFeatures";
import Hero from "../../components/home/Hero";
import { fetchProducts } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../ui/Loading";
import MainProductSlider from "../../components/home/product-slider/MainProductSlider";
import Footer from "../../components/footer/Footer";
import Categories from "../../components/home/categories/Categories";

const HomePage = () => {
    const dispatch=useDispatch();
    const { loading } = useSelector((state) => state.products);

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    return <div className="min-h-screen">
        {
            loading ? <Loading />:
        <>
            <Hero />
            {/* <Categories /> */}
            <MainFeatures />
            <MainProductSlider />
            <Footer />
        </>
        }
    </div>
}

export default HomePage;
