import React from "react";
// reactstrap components
import { Button } from "reactstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import FacebookSignInService from "../../services/FacebookSignInService";

const FacebookLoginButton = ({ changeToggleModal }) => {
  const responseFacebook = async response => {
    if (response) {
      var res = await FacebookSignInService(response);
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("name", res.data.userName);
      localStorage.setItem("profilePicture", res.data.profilePicture);
      changeToggleModal();
      console.log(res);
    }
  };
  return (
    <FacebookLogin
      appId="375973446613378"
      fields="name,email,picture"
      callback={responseFacebook}
      render={renderProps => (
        <Button
          className="btn-icon mt-2 mb-2"
          color="neutral"
          onClick={renderProps.onClick}
        >
          <span className="btn-inner--icon mr-1">
            <img
              alt="..."
              src={require("assets/img/icons/common/facebook.png")}
            />
          </span>
          <span className="btn-inner--text">FACEBOOK</span>
        </Button>
      )}
    />
  );
};

export default FacebookLoginButton;
