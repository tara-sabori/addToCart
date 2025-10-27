import { BiTransferAlt } from "react-icons/bi";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { IoMdWifi } from "react-icons/io";
import { MdOutlineConnectWithoutContact, MdOutlineDesignServices } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import FeatureCard from "./FeatureCard";

const MainFeatures = () => {
    const items = [
        {
            icon: <BiTransferAlt size='27px'/>,
            title: 'Initial Contact',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <MdOutlineConnectWithoutContact size='27px' />,
            title: 'Contracting',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <HiOutlineArrowRightOnRectangle size='27px' />,
            title: 'Fast Prototyping',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <IoMdWifi size='27px' />,
            title: 'Discovery Session',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <MdOutlineDesignServices size='27px' />,
            title: 'Design Phase',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <WiStars  size='27px'/>,
            title: 'Develop & Listing for sale',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        }
    ]
    return (
        <div className="bg-secondary-50 py-20 space-y-5 px-5 lg:px-0 lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto">
            <h3 className="text-center text-lg font-semibold">How Simple Work</h3>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {
                items?.map((item,index)=><FeatureCard {...item} key={index} />)
               }
            </div>
        </div>
    );
}

export default MainFeatures;
