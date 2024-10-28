import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom";
import { pageLimit } from "../../helpers/constants"
import { getSearchParameter } from "../../helpers/helperFunctions";
import { useMemo } from "react";


const Pagination = () => {
    const { products } = useSelector((state) => state.productListReducer)
    const { total } = products;

    const [searchParam, setSearchParam] = useSearchParams();
    const searchObj = useMemo(
        () => getSearchParameter(searchParam),
        [searchParam]
    );

    const handlePagination = async (page) => {
        setSearchParam({ ...searchObj, PageNumber: String(page) });
    };

    const pageCount = Math.ceil(total / pageLimit);

    let btn = [];
    let pgLimit = pageCount;
    let currentPage = searchObj.PageNumber ?? 1;
    let start = Math.floor((currentPage - 1) / pgLimit) * pgLimit;

    const getPages = () => {
        const from = Math.max(Math.min(currentPage - 3, pgLimit - 5), 0);
        const to = Math.min(from + 4, pgLimit);

        for (let i = from; i <= to; i++) {
            let num = start + i + 1;

            if (num > pageCount) break;

            btn.push(
                <button
                    key={num}
                    className={`table-list-pagination-btn ${+currentPage === +num ? "table-list-active" : ""
                        }`}
                    onClick={() => handlePagination(num)}
                    disabled={+currentPage === +num}
                >
                    {num}
                </button>
            );
        }
        return btn;
    };

    return (
        <div className="mt-3 w-100 d-flex justify-content-end">
            <button
                className={`table-list-pagination-btn ${+currentPage === 1 ? "pagination-btn-disable" : ""
                    }`}
                onClick={() => handlePagination(+currentPage - 1)}
                disabled={+currentPage === 1}
            >
                <img src="/media/left-arrow.png" className="img-fit" alt="left-arrow" />
            </button>
            {getPages()}
            <button
                className={`table-list-pagination-btn ${+currentPage === pageCount ? "pagination-btn-disable" : ""
                    }`}
                onClick={() => handlePagination(+currentPage + 1)}
                disabled={+currentPage === pageCount}
            >
                <img src="/media/right-arrow.png" className="img-fit" alt="right-arrow" />
            </button>
        </div>
    );


}

export default Pagination