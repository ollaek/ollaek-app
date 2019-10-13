import React from "react";
import { Button } from "reactstrap";
import GoogleLogin from 'react-google-login';


const GoogleLoginButton = () =>{
    const responseGoogle = (response) => {
        console.log(response);
    }
    return(

<GoogleLogin
    clientId="131675481073-un5vdvfeikn9bjf2hu5epna23s368ujg.apps.googleusercontent.com"
    render={renderProps => (
      <Button
      className="btn-icon mt-2 mb-2 ml-1"
      color="neutral"
      href="#pablo"
      onClick={renderProps.onClick}
      disabled={renderProps.disabled}
    >
      <span className="btn-inner--icon mr-1">
        <img
          alt="..."
          src={require("assets/img/icons/common/google.svg")}
        />
      </span>
      <span className="btn-inner--text">Google</span>
    </Button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

       
    );
};

export default GoogleLoginButton;