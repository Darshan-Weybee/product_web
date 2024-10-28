import { useSelector } from "react-redux"
import { useState } from "react";
import EditProfile from "../common/EditProfile";
import ErrorBoundary from "../../helpers/ErrorBoundary";

const Profile = () => {
    const [showEditForm, setShowEditForm] = useState(false);
    const { userData } = useSelector(state => state.authReducer)

    const handleEditProfileBtn = () => setShowEditForm(!showEditForm);

    return (
        <ErrorBoundary>
            {
                userData?.Email && <div className="profile-container">
                    <div className="profile-details p-3">
                    <div className="profile-image">
                        <img src="/media/blank.png" alt="person-image" className="img-fit" />
                    </div>

                    {!showEditForm && <div className="d-flex justify-content-between w-100 px-3">
                        <div className="d-flex flex-column gap-3">
                            <div><span className="user-name">FirstName : </span><span>{userData.FirstName}</span></div>
                            <div><span className="user-name">LastName : </span><span>{userData.LastName}</span></div>
                        </div>

                        <div><button className="btn btn-sm profile-btn" onClick={handleEditProfileBtn}>Edit Profile</button></div>
                    </div>}
                    {showEditForm && <EditProfile callback={handleEditProfileBtn}/> }
                </div>
                </div>
            }

        </ErrorBoundary>
    )
}

export default Profile