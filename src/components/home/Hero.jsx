import { Link } from 'react-router-dom';

const Hero = () => {
    // rgba(0, 0, 0, 0.38)
    return (
        <div className="w-full h-[80vh] bg-[url('../public/assets/images/hero.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="w-full h-full flex items-center justify-center text-white" style={{backgroundColor:"rgba(0, 0, 0, 0.38)"}}>
                <div className="text-center space-y-4 px-5">
                <span className="text-sm xl:text-base font-semibold">Your Destination for Quality Finds</span>
                <h1 className="font-bold text-2xl text-orange-950">Shopping Cart</h1>
                <p className="text-sm xl:text-base font-semibold text-center pb-4 xl:pb-8">
                Welcome to Shopping Cart, where every product tells a story. From handpicked items to the latest trends!
                </p>
                <div>
                  <Link to={"/products"} className='border border-white rounded-xl p-2 xl:p-4 text-sm xl:text-base'>
                   Explore Our Products
                  </Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
