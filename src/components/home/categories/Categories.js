import CategoryCard from "./CategoryCard"

const Categories = () => {
    const items = [
            {
                // icon: <BiTransferAlt size='27px'/>,
                title: 'Initial Contact',
                desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
            },
            {
                // icon: <MdOutlineConnectWithoutContact size='27px' />,
                title: 'Contracting',
                desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
            },
            {
                // icon: <HiOutlineArrowRightOnRectangle size='27px' />,
                title: 'Fast Prototyping',
                desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
            },
            {
                // icon: <IoMdWifi size='27px' />,
                title: 'Discovery Session',
                desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
            },
            {
                // icon: <MdOutlineDesignServices size='27px' />,
                title: 'Design Phase',
                desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
            },
            {
                // icon: <WiStars  size='27px'/>,
                title: 'Develop & Listing for sale',
                desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
            }
        ]
  return (
    <div className="bg-secondary-100 space-y-5">
        <div className="py-20 space-y-5 px-5 lg:px-0 lg:max-w-screen-md 2xl:max-w-screen-xl mx-auto">
            <h3 className="text-center text-lg font-semibold">Our Categories</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
               {/* {
                items?.map((item,index)=><FeatureCard {...item} key={index} />)
               } */}
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
            </div>
        </div>
    </div>
  )
}

export default Categories