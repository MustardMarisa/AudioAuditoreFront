/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

const LOGIN_EXITO = "#/";
const LOGIN_FALLO = "#/loginError";

export default class Auth {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            // the following three lines MUST be updated
            domain: 'binderbul.auth0.com',
            audience: 'https://binderbul.auth0.com/userinfo',
            clientID: '1d89YoPlF1IFyEZYv3Lb1ZimvfYjvbsL',
            redirectUri: 'http://localhost:3000/#/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.logout = this.logout.bind(this);
        this.getProfile = this.getProfile.bind(this);
        //this.setSession = this.setSession.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        //alert("autentificado0");
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                //para limpiar la url
                location.hash = "";
                location.pathname = LOGIN_EXITO;
            } else if (err) {
                location.pathname = LOGIN_FALLO;
                console.log(err);
            }
        })
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        location.pathname = LOGIN_EXITO;
    }

    getProfile() {
        if (localStorage.getItem("id_token")) {
            return jwtDecode(localStorage.getItem("id_token"));
        }
        else {
            return {};
        }
    }

}