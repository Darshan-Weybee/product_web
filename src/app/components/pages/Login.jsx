import { useForm } from "react-hook-form"
import ErrorBoundary from "../../helpers/ErrorBoundary"
import { useDispatch, useSelector } from "react-redux"
import { Input } from "../common/formHelper";
import { useState } from "react";
import { useNavigate } from "react-router";
import { HOME_PAGE, SIGNUP_PAGE } from "../../helpers/routes";
import ErrorMessage, { FormError } from "../common/ErrorMessage";
import { Link } from "react-router-dom";
import { getUserDetailsFromLocalStorage } from "../../helpers/helperFunctions";
import { saveUserCred } from "../../reducers/auth/authAction";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
    Email: Yup.string().email().required("Email is required"),
    Password: Yup.string().required("Password is reuired"),
  });

const Login = () => {
    const {userData} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const [error, SetError] = useState();
    const navigate = useNavigate();
    const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(schema)});

    const checkUserCred = (data,userDetails) => {
        console.log(data,userDetails,"sjnskjx")
        if(data.Email?.toLowerCase() == userDetails.Email?.toLowerCase()){
            if(data.Password == userDetails.Password){
                navigate(HOME_PAGE);
            }
            else SetError("Wrong email or Password")
        }
        else SetError("Wrong email or Password")
    }

    const onSubmit = (data) => {

        if(!userData?.Email) {
                const userDetails = getUserDetailsFromLocalStorage();
                console.log(userDetails, "geted")
                if(userDetails?.Email){
                    console.log("success")
                    dispatch(saveUserCred(userDetails))
                    checkUserCred(data, userDetails)
                }
                else{
                    SetError("User not exists");
                    return;
                }
        }
    };

    return (
        <ErrorBoundary>
            <div>
                <form
                    className="centerForm auth-form"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="fs-3 ms-1 mb-4 fw-semibold text-dark">Sign In</div>
                    <ErrorMessage error={error}/>
                    <div className="d-flex flex-column gap-4 my-4">
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
                    <div className="mt-2 d-flex justify-content-end fw-6"><Link to={SIGNUP_PAGE}>Signup Here</Link></div>
                </form>
            </div>
        </ErrorBoundary>
    )
}

export default Login