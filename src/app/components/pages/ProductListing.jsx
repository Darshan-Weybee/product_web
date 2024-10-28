import { useEffect, useMemo } from "react"
import { getProducList } from "../../reducers/productListing/productListingAction"
import { useDispatch, useSelector } from "react-redux"
import ErrorBoundary from "../../helpers/ErrorBoundary"
import { PRODUCT_DETAIL_PAGE } from "../../helpers/routes"
import { Link, useSearchParams } from "react-router-dom"
import ErrorMessage from "../common/ErrorMessage"
import Pagination from "../common/Pagination"
import { pageLimit } from "../../helpers/constants"
import { getSearchParameter } from "../../helpers/helperFunctions"
import Loader from "../common/Loader"

const ProductListing = () => {
    const {loading, products,error} = useSelector((state) => state.productListReducer)
    const dispatch = useDispatch()
    const [searchParam, setSearchParam] = useSearchParams();
    const searchObj = useMemo(
      () => getSearchParameter(searchParam),
      [searchParam]
    );

    useEffect(() => {
        dispatch(getProducList({ limit: pageLimit, skip: (searchObj?.PageNumber ?? 1 )*pageLimit }))
    }, [searchParam, searchObj])

    return (
        <ErrorBoundary>
            <div>
                <h3>Products</h3>
                {loading && <Loader/>}
                {error && <ErrorMessage error={error}/>}
                {!loading && products?.products?.length > 0 &&
                    <div className="productList-container">
                        {products?.products?.map(product => {
                            return (
                                <div className="d-flex flex-column px-3 py-2 product-item" key={product.id}>
                                    <div className="thumbnail-container m-auto">
                                        <img className="img-fit" src={product.thumbnail} alt="thumb-image" />
                                    </div>
                                    <div className="px-3">
                                        <div className="fs-5 fw-semibold">{product.brand}</div>
                                        <Link
                                            className="product-link"
                                            to={`${PRODUCT_DETAIL_PAGE}/${product.id}`}>{product.title}</Link>
                                        <div className="product-category">{product.category}</div>
                                        <div className="d-flex justify-content-between">

                                            <div className="d-flex gap-1 align-items-center">
                                                <div>{product.rating}</div>
                                                <div className="star-img">
                                                    <img className="img-fit" src="/media/star.png" alt="star-image" />
                                                </div>
                                            </div>

                                            <div className="d-flex gap-1">
                                                <div className="text-danger">{product.discountPercentage}%</div>
                                                <div className="fw-bold">${product.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                }
                {products?.products?.length > 0 && <Pagination/>}
            </div>
        </ErrorBoundary>
    )
}

export default ProductListing