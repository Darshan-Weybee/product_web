const ProductImageCarousel = ({ imageArr }) => {

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">

            {imageArr?.map((_, index) => <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} aria-label={`Slide ${index}`} className={`${index ===0 ? "active" : ""}`}  aria-current={`${index ===0 ? "active" : ""}`}></button>)}
            </div>

            <div className="d-flex justify-content-center align-items-center carousel-height">
                <div className="carousel-inner w-75 h-100">
                    {imageArr?.map((image, index) => <div className={`carousel-item ${index === 0 ? "active" : ""} w-100`} key={index}>
                        <img src={image} className="img-fit" alt="product-image" />
                    </div>
                    )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default ProductImageCarousel