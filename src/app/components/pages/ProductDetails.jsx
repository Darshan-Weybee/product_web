import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getProducDetail } from "../../reducers/productDetail/productDetailAction"
import ProductImageCarousel from "../common/ProductImageCarousel"
import ErrorBoundary from "../../helpers/ErrorBoundary"
import ErrorMessage from "../common/ErrorMessage"

const ProductDetails = () => {
    const { loading, productDetails, error } = useSelector((state) => state.productDetailReducer)
    const dispatch = useDispatch()
    const params = useParams();

    console.log(error);
    useEffect(() => {
        dispatch(getProducDetail(params.id))
    }, [])

    return (
        <ErrorBoundary>
            <div className="productDetail-container mt-5">
                {loading && <div>Loading...</div>}
                {error && <ErrorMessage error={error}/>}
                {"id" in productDetails &&
                    <>
                        <div className="d-flex gap-3 justify-content-around">

                            <div className="align-items-center d-flex justify-content-center w-50">

                                {/* <div className="product-image">
                            <img className="img-fit" src={productDetails?.images[0]} alt="product-image" />
                        </div> */}
                                <ProductImageCarousel imageArr={productDetails?.images ?? []} />
                            </div>
                            <div className="product-detial-right w-25">
                                <div className="product-brand">{productDetails.brand}</div>
                                <div className="product-title">{productDetails.title}</div>
                                <div className="product-category">{productDetails.category}</div>
                                <div className="d-flex gap-5 mt-3 mb-3">
                                    <div className="d-flex flex-column">
                                        <span className="product-price-tag">Price</span>
                                        <span className="product-price-rate">${productDetails.price}</span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="product-discount-tag">Discount</span>
                                        <span className="product-discount">{productDetails.discountPercentage}%</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-row gap-4">
                                    <span className="product-discount-tag">Rating : </span>
                                    <span className="product-discount d-flex gap-2">
                                        <span className="product-rating">{productDetails.rating}</span>
                                        <div className="star-img-detail"><img className="img-fit" src="/media/star.png" alt="star-image" /></div>
                                    </span>
                                </div>

                                <div>
                                    <div className="fw-semibold fs-5 mb-3">Description</div>
                                    <div className="fs-5 mb-2">{productDetails.description}</div>
                                    <div className="fs-5 mb-2">Dimensions : {productDetails.dimensions.width ?? 0}&nbsp;x&nbsp;{productDetails.dimensions.height ?? 0}&nbsp;x&nbsp;{productDetails.dimensions.height ?? 0}</div>
                                    <div className="fs-5 mb-2">Warranty : {productDetails.warrantyInformation}</div>
                                    <div className="fs-5 mb-2">Availability : {productDetails.availabilityStatus}</div>
                                    <div className="fs-6">SKU : {productDetails.sku}</div>
                                    <div className="fs-6">Category : {productDetails.category}</div>
                                </div>

                            </div>

                        </div>
                    </>}

            </div>
        </ErrorBoundary>
    )
}

export default ProductDetails