import axios from "axios";

class AuthController {
    async login(email, password) {
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDL_sJslXVAnavawZEwEO5HtSGORLO70JM`,
                {
                    email: email,
                    password: password,
                    returnSecureToken: true,
                });
            return { status: true, message: "logged in successfully", token: response.data.idToken }
        } catch (error) {
            return { status: false, message: error.response.data.error.message }
        }
    }
    
    async register(email, password) {
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDL_sJslXVAnavawZEwEO5HtSGORLO70JM`,
                {
                    email: email,
                    password: password,
                    returnSecureToken: true,
                });
            return { status: true, message: "registered successfully", token: response.data.idToken, }
        } catch (error) {
            return { status: false, message: "registration failed try again" }
        }
    }
}
export default AuthController;