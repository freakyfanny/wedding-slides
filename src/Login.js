import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './Login.css';

function Login() {
    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <div className="login">
        <FacebookLogin
            autoload
            appId="575246326574945"
            fields="name,email,picture"
            scope="public_profile,instagram_basic,pages_show_list"
            callback={responseFacebook}
        />
        </div>
    );
}

export default Login;