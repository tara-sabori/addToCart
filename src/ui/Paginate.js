import { useEffect } from "react";
import { PiCaretLeftFill, PiCaretRightFill } from "react-icons/pi";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const Paginate = ({ pageCount, currentPage, setCurrentPage }) => {
    const [serachParams, setSearchParams] = useSearchParams();
    const page = serachParams.get("page");
    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1);
        handleSearch("page", data.selected + 1);

        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        if (page) {
            setCurrentPage(page)
        }
    }, [page, setCurrentPage])
    // console.log(page);
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
    return (
        <div className="mx-auto mb-5">
            <div className="flex items-center gap-4">
                <ReactPaginate
                    onPageChange={handlePageClick}
                    previousLabel={<PiCaretLeftFill />}
                    nextLabel={<PiCaretRightFill />}
                    pageCount={pageCount}
                    pageRangeDisplayed={1}
                    containerClassName="flex items-center justify-between gap-2 text-lg"
                    pageLinkClassName={
                        "w-6 h-6 rounded-md flex items-center justify-center"
                    }
                    activeLinkClassName={
                        "bg-surface border border-secondary-500 shadow-[0_0_5px_#00000020] text-secondary-900 w-6 h-6 rounded-md flex items-center justify-center cursor-default"
                    }
                    previousLinkClassName="text-sm text-secondary-900"
                    nextLinkClassName="text-sm text-secondary-900"
                    disabledLinkClassName="cursor-default"
                    key={pageCount}
                    forcePage={pageCount > 1 && currentPage - 1}
                />
            </div>
        </div>
    );
};

export default Paginate;
