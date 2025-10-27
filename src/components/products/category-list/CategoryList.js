import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CategoryList = ({ setCurrentPage }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryTitle=searchParams.get("category")||"";
    const ref = useRef();
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        let handler = (e) => {
            if (!ref.current.contains(e.target)) {
                setShowList(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    const categoryList = [
        { id: 1, title: "men", category: "men's clothing" },
        { id: 2, title: "women", category: "women's clothing" },
        { id: 3, title: "electronics", category: "electronics" },
        { id: 4, title: "jewelery", category: "jewelery" },
    ]
    function handleSearch(key, value) {
        setSearchParams((prevParams) => {
            if (value === null || value === "") {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    }
    const handleSelect = (category) => {
        setShowList(false);
        searchParams.set("page","1")
        if(category){
            searchParams.set('category', category?.title)
        }
        else{
            searchParams.delete("category");
        }
        setSearchParams(searchParams);
        setCurrentPage(1);
    }
    return (
        <div
            ref={ref}
            className='w-[230px] relative rounded-lg border border-secondary-600 ml-3 cursor-pointer'>
            <div className='absolute -top-2 left-6 bg-backgroundapp px-2 text-xs'>
                categories
            </div>
            <div
                onClick={() => setShowList(!showList)}
                className='p-2.5 w-full flex items-center justify-between'>
                <span>{categoryTitle || "All"}</span>
                {/* < */}
            </div>
            {
                showList && <div className='max-h-[200px] overflow-y-auto absolute top-[50px] bg-backgroundapp rounded-md border border-secondary-600 left-0 right-0'>
                    <div onClick={() => handleSelect("")} className='p-1.5 space-y-2 hover:bg-secondary-400 w-full'>All</div>
                    {
                        categoryList?.map(category => <div
                            onClick={() => handleSelect(category)}
                            className='p-1.5 space-y-2 hover:bg-secondary-400 w-full'
                            key={category?.id}>
                            <span>{category?.title}</span>
                        </div>)
                    }
                </div>
            }
        </div>
    );
}

export default CategoryList;
