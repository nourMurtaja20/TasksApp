import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthController from "../controllers/auth-controller";
import { authActions } from "../redux/auth-slic";
import SocialIcons from "./SocialIcons";

let RegisterTab = () => {

    let dispatch = useDispatch();
    let navigator = useNavigate();
    let [agree, setAgree] = useState(false);
    let emailRef = useRef();
    let passwordRef = useRef();
    let repeatpasswordRef = useRef();
    let authController = new AuthController();

    let checkData = () => {
        if (emailRef.current.value != "" && passwordRef.current.value != "" && repeatpasswordRef.current.value != "") {
            if (passwordRef.current.value == repeatpasswordRef.current.value) {
                return true;
            }
            alert("password confirmation error ");
        } else {
            alert("enter requred data")
            return false;
        }
    }
    let register = async () => {
        let response = await authController.register(emailRef.current.value, passwordRef.current.value);
        if (response.status) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("loggedin", true);
            dispatch(authActions.register(response.token));
            navigator("/dashboard", { replace: true });
        }
    }
    let onsubmitHandler = (event) => {
        event.preventDefault();
        if (checkData) {
            register();
        }
    }
    let onAgreeHandler = (event) => {
        setAgree(event.target.checked);
    }
    return <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <form onSubmit={onsubmitHandler}>
            <SocialIcons />

            <h4 className="mb-4 mt-5 text-center">or:</h4>

            {/* <div className="form-outline mb-4">
                <input type="text" id="registerName" className="form-control" placeholder="Name" />

            </div> */}

            {/* <div className="form-outline mb-4">

                <input type="text" id="registerUsername" className="form-control" placeholder="Username" />

            </div> */}

            <div className="form-outline mb-4">
                <input type="email" id="registerEmail" className="form-control" placeholder="Email" ref={emailRef} />

            </div>

            <div className="form-outline mb-4">


                <input type="password" id="registerPassword" className="form-control" placeholder="password" ref={passwordRef} />
            </div>

            <div className="form-outline mb-4">

                <input type="password" id="registerRepeatPassword" className="form-control" placeholder="repeat password" ref={repeatpasswordRef} />

            </div>

            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" //checked
                    aria-describedby="registerCheckHelpText" onChange={onAgreeHandler} />
                <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                </label>
            </div>
            <button type="submit" disabled={!agree} className="btn btn-main btn-block mb-3">Register</button>
        </form>
    </div>
}
export default RegisterTab;