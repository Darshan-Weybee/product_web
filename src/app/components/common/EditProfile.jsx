import { useDispatch, useSelector } from "react-redux";
import { string, object } from "yup";
import { FormError } from "./ErrorMessage";
import { Input } from "./formHelper";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { updateUserProfile } from "../../reducers/auth/authAction";

const schema = object().shape({
    FirstName: string().required("Email is required"),
    LastName: string().required("Password is reuired"),
});


const EditProfile = ({ callback }) => {
    const { userData } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { FirstName: userData.FirstName, LastName: userData.LastName },
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        console.log("form submitted");
        dispatch(updateUserProfile(data))
        callback();
    };

    return (
        <div>
            <form
                className=""
                onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-column gap-3 my-2">
                    <div className=" mb-2">
                        <Input placeholder="FirstName" type="text" register={register} name="FirstName" className="prfile-input-fileds" />
                        {errors?.FirstName?.message && <FormError error={errors?.FirstName?.message} />}
                    </div>
                    <div className="mb-2">
                        <Input placeholder="LastName" type="text" register={register} name="LastName" className="prfile-input-fileds" />
                        {errors?.LastName?.message && <FormError error={errors?.LastName?.message} />}
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <button type="submit"
                        className="btn btn-sm profile-btn">Submit</button>
                    <button type="button" className="btn btn-sm btn-secondary" onClick={() => callback()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile