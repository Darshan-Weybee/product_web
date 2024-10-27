import { useEffect } from "react"
import { getProducList } from "../../reducers/productListing/productListingAction"
import { useDispatch, useSelector } from "react-redux"
import ErrorBoundary from "../../helpers/ErrorBoundary"
import { PRODUCT_DETAIL_PAGE } from "../../helpers/routes"
import { Link } from "react-router-dom"
import ErrorMessage from "../common/ErrorMessage"

const ProductListing = () => {
    const {loading, products,error} = useSelector((state) => state.productListReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducList({ limit: 8, page: 1 }))
    }, [])

    return (
        <ErrorBoundary>
            <div>
                <h2>Products</h2>
                {loading && <div>Loading...</div>}
                {error && <ErrorMessage error={error}/>}
                {products?.products?.length > 0 &&
                    <div className="productList-container">
                        {products?.products?.map(product => {
                            return (
                                <div className="d-flex flex-column px-3 py-2" key={product.id}>
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
            </div>
        </ErrorBoundary>
    )
}

export default ProductListing