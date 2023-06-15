import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import NavMenu from "../../component/dashboard/NavMenu";
import { authActions } from "../../redux/auth-slic";
import { tasksActions } from "../../redux/tasks-slic";

let Dashboard = () => {
    let navigator = useNavigate();
    let dispatch = useDispatch();
    let onSearchHandler = (event) => {
        dispatch(tasksActions.search(event.target.value));
    }
    let onSignOutHandler = () => {
        localStorage.setItem("loggedin", false);
        localStorage.setItem("token", "");
        dispatch(authActions.logout());
        navigator("/login", { replace: true });
    }
    return <Fragment>
        <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Momen Task</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" onChange={onSearchHandler} />
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <button className="nav-link px-3 btn-light-main btn" onClick={onSignOutHandler}>Sign out</button>
                </div>
            </div>
        </header>

        <div className="container-fluid">
            <div className="row">
                <NavMenu />
                <Outlet />
            </div>
        </div>
    </Fragment >
}
export default Dashboard;