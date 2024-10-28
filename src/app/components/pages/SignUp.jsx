import { useForm } from "react-hook-form"
import ErrorBoundary from "../../helpers/ErrorBoundary"
import { useDispatch } from "react-redux"
import { Input } from "../common/formHelper";
import { useNavigate } from "react-router";
import { HOME_PAGE } from "../../helpers/routes";
import { saveUserCred } from "../../reducers/auth/authAction";
import { yupResolver } from "@hookform/resolvers/yup";
import {string, object} from "yup";
import { FormError } from "../common/ErrorMessage";

const schema = object().shape({
    FirstName: string().required("First Name is required"),
    LastName: string().required("Last Name is reuired"),
    Email: string().email().required("Email is reuired"),
    Password: string().required("Password is reuired")
  });

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(schema)});
    const onSubmit = (data) => {
        console.log(data, "signup submit")
        dispatch(saveUserCred(data))
        navigate(HOME_PAGE)
    };

    return (
        <ErrorBoundary>
            <div>
                <form
                    className="centerForm auth-form"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="fs-3 ms-1 mb-4 fw-semibold text-dark">Sign Up</div>
                    <div className="d-flex flex-column gap-4 my-4">
                    <div className="input-fields mb-2">
                            <Input placeholder= "FirstName" type="text" register={register} name="FirstName" className="" />
                            {errors?.FirstName?.message && <FormError error={errors?.FirstName?.message}/>}
                        </div>
                        <div className="input-fields mb-2">
                            <Input placeholder= "LastName" type="text" register={register} name="LastName" className="" />
                            {errors?.LastName?.message && <FormError error={errors?.LastName?.message}/>}
                        </div>
                        <div className="input-fields mb-2">
                            <Input placeholder= "Email" type="text" register={register} name="Email" className="" />
                            {errors?.Email?.message && <FormError error={errors?.Email?.message}/>}
                        </div>
                        <div className="input-fields">
                            <Input placeholder= "Password" type="text" register={register} name="Password" className="" />
                            {errors?.Password?.message && <FormError error={errors?.Password?.message}/>}
                        </div>
                    </div>
                    <div className="form-button">
                        <button type="submit"
                            className="btn mt-3 w-100 fw-bold fs-5">Submit</button>
                    </div>
                </form>
            </div>
        </ErrorBoundary>
    )
}

export default SignUp