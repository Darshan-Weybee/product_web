export const Input = ({placeholder, register, name, className, type}) => {
    return <input {...register(name)}
    className={className}
    placeholder={placeholder}
    type={type}/>
}