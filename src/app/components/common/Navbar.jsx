import { Link, useNavigate } from "react-router-dom"
import { CHANGE_PASSWORD, EDIT_PROFILE, HOME_PAGE, LOGIN_PAGE } from "../../helpers/routes"
import { useState } from "react"
import { AUTH_LOCAL_STORAGE_KEY } from "../../helpers/constants";

const Navbar = () => {
    const [show, setPopupShow] = useState(false);
    const navigate = useNavigate();

    const setPopupVisibility = () => setPopupShow(!show);
    const LogOut = () => {
        localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
        navigate(LOGIN_PAGE);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-semibold" to={HOME_PAGE}>
                    <span className="webNam-P-C">P</span>eak<span className="webNam-P-C">C</span>art
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to={HOME_PAGE}>Home</Link>
                    </div>
                    <div className="position-relative">
                    <button className="btn me-3 menu-icon" onClick={setPopupVisibility}>
                        <img className="img-fit" src="/media/menu.png" alt="menu-icon" />
                    </button>
                    <div className={`menu-popup ${show ? "show" : "hidden"}`}>
                        <div className="px-3 py-2 menu-item">
                            <Link className="" to={EDIT_PROFILE}>Edit Profile</Link>
                        </div>
                        <div className="px-3 py-2 menu-item">
                            <Link className="" to={CHANGE_PASSWORD}>Change Password</Link>
                        </div>
                        <div className="px-3 py-2 menu-item">
                            <Link className="" to="" onClick={LogOut}>Sign Out</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 