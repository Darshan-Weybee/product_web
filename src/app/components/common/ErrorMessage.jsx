const ErrorMessage = ({error}) => {
    return (
        <div className="d-flex fs-5 fw-semibold justify-content-center mx-auto text-danger w-100">{error}</div>
    )
}

export default ErrorMessage

export const FormError = ({error}) => {
    console.log(error)
    return <div className="text-danger fs-6 w-100">{error}</div>
}