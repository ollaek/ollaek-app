import Token from "../apis/oauth";

const GoogleSignInService = response => {
  debugger;
  const res = Token({
    method: "post",
    url: "/api/Account/ExternalProviderRegister",
    data: {
      Photo: response.profileObj.imageUrl,
      Name: response.profileObj.name,
      ProviderId: 2,
      Token: response.tokenObj.id_token,
      UserProviderId: response.googleId
    }
  });

  console.log(res);
  return res;
};

export default GoogleSignInService;