import { useState } from "react";
import { PiMagnifyingGlassBold, PiX } from "react-icons/pi"
import { useSearchParams } from "react-router-dom";

const SearchBox = ({setCurrentPage}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");

    const [search,setSearch]=useState(searchQuery || "");
    const result = (e) => {
        if (e.key === 'Enter') {
            setSearch(e.target.value)
            searchParams.set("page","1")
            searchParams.set('search', e.target.value)
            setSearchParams(searchParams);
            setCurrentPage(1);
        }
        else return
    }
    const rst = () => {
        setSearch('')
        searchParams.set("page","1")
        searchParams.delete('search')
        setSearchParams(searchParams);
        setCurrentPage(1);
    }


  return (
    <div className='w-[230px] relative rounded-lg border border-secondary-600 ml-3 cursor-pointer'>
        <div className='absolute -top-2 left-6 bg-backgroundapp px-2 text-xs'>
                search
        </div>
        <PiMagnifyingGlassBold className='absolute -translate-y-1/2 top-1/2 left-2 text-secondary-600 text-xl' />
        <input
            className='w-full focus:outline-none bg-backgroundapp rounded-lg pl-8 py-2.5'
            placeholder='search'
            type="text"
            onKeyDown={(e) => result(e)}
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
            />
        <PiX
            onClick={() => rst()}
            className={`${searchQuery ? ' visible' : 'invisible'} absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer`} />
    </div>
  )
}

export default SearchBox