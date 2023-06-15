import SocialIcons from "./SocialIcons";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/auth-slic";
import { useNavigate } from "react-router-dom";
import AuthController from "../controllers/auth-controller";
import { useRef } from "react";

let LoginTab = () => {
    let dispatch = useDispatch();
    let navigator = useNavigate();
    let authController = new AuthController();
    let emailRef = useRef();
    let passwordRef = useRef();
    let onsubmitHandler = (event) => {
        event.preventDefault();
        if (checkData) {
            login();
        }
    }
    let checkData = () => {
        if (emailRef.current.value != "" && passwordRef.current.value != "") {
            return true;
        } else {
            return false;
        }
    }
    let login = async () => {
        let response = await authController.login(emailRef.current.value, passwordRef.current.value);
        if (response.status) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("loggedin", true);
            dispatch(authActions.login(response.token));
            navigator("/dashboard", { replace: true });
        }else{
            alert(response.message);
        }
    }
    return <div className="tab-pane  fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form onSubmit={onsubmitHandler}>
            <SocialIcons />

            <h4 className="mb-5 mt-2 text-center">or</h4>


            <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" placeholder="Email or username" ref={emailRef} />

            </div>


            <div className="form-outline mb-4">
                <input type="password" id="loginPassword" className="form-control" placeholder="Password" ref={passwordRef} />

            </div>

            <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">

                    <div className="form-check mb-3 mb-md-0">
                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                        <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                    </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">

                    <a href="#!">Forgot password?</a>
                </div>
            </div>

            <button type="submit" className="btn btn-main btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
            </div>
        </form>
    </div>
}
export default LoginTab;