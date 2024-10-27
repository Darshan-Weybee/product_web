import { useDispatch, useSelector } from "react-redux"
import { getUserDetailsFromLocalStorage } from "../../helpers/helperFunctions";
import { saveUserCred } from "../../reducers/auth/authAction";
import { Navigate } from "react-router";
import { LOGIN_PAGE } from "../../helpers/routes";

const AuthGuard = ({children}) => {
    const {userData} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    console.log("auth guard check", userData)

    if(userData?.Email) return children;

    if(!userData?.Email){
        const userDetails = getUserDetailsFromLocalStorage();
        console.log(userDetails, "userDetails");
        if(userDetails?.Email){
            dispatch(saveUserCred(userDetails))
            return children
        }
        return <Navigate to={LOGIN_PAGE}/>
    }

}

export default AuthGuard