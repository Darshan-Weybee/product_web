import { useForm } from "react-hook-form"
import ErrorBoundary from "../../helpers/ErrorBoundary"
import { useDispatch, useSelector } from "react-redux"
import { Input } from "../common/formHelper";
import { useNavigate } from "react-router";
import { HOME_PAGE } from "../../helpers/routes";
import { saveUserCred, updateUserPassword } from "../../reducers/auth/authAction";
import { useState } from "react";
import ErrorMessage, { FormError } from "../common/ErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, ref } from "yup";

const schema = object().shape({
    CurrentPassword: string().required("Current password is required"),
    NewPassword: string().required("New password is required"),
    ConfirmPassword: string().oneOf(
          [ref("NewPassword")],
          "New password and Confirm password didn't match"
        )
      .required("Password confirmation is required"),
  });

const ChangePassword = () => {
    const { userData } = useSelector(state => state.authReducer);
    const [error, SetError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)});

    console.log(errors);
    const onSubmit = (data) => {
        console.log("form submitted");
        if(userData.Password == data.CurrentPassword){   
            dispatch(updateUserPassword(data))
            navigate(HOME_PAGE)
            return;
        }
        else SetError("CurrentPassword is wrong")
    };

    return (
        <ErrorBoundary>
            <div>
                <form
                    className="centerForm auth-form"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="fs-3 ms-1 mb-4 fw-semibold text-dark">Change Password</div>
                    <ErrorMessage error={error}/>
                    <div className="d-flex flex-column gap-4 my-4">
                        <div className="input-fields mb-2">
                            <Input placeholder="Current Password" type="text" register={register} name="CurrentPassword" className="" />
                            {errors?.CurrentPassword?.message && <FormError error={errors?.CurrentPassword?.message}/>}
                        
                        </div>
                        <div className="input-fields mb-2">
                            <Input placeholder="New Password" type="text" register={register} name="NewPassword" className="" />
                            {errors?.NewPassword?.message && <FormError error={errors?.NewPassword?.message}/>}
                        
                        </div>
                        <div className="input-fields">
                            <Input placeholder="Confirm Password" type="text" register={register} name="ConfirmPassword" className="" />
                            {errors?.ConfirmPassword?.message && <FormError error={errors?.ConfirmPassword?.message}/>}
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

export default ChangePassword