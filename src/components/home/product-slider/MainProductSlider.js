import { useSelector } from "react-redux"
import Slider from "./Slider";
import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const MainProductSlider = () => {
      const { products } = useSelector((state) => state.products);
  return (
    <div className="p-4 space-y-4 lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between">
            <h6 className="font-semibold text-lg text-secondary-800">Our Products</h6>
            <Link to={"/products"} className='flex items-end gap-2'>
                  <span className='text-secondary-800'>More Products</span>
                  <PiArrowRightBold className='text-orange-950' size={18} />
            </Link>
      </div>
      {
        products?.length && <Slider slides={products?.slice(0,7)} />
      }
    </div>
  )
}

export default MainProductSlider