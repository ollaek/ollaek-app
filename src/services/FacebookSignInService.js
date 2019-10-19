import Token from "../apis/oauth";

const FacebookSignInService = response => {
  const res = Token({
    method: "post",
    url: "/api/Account/ExternalProviderRegister",
    data: {
      Photo: response.picture.data.url,
      Name: response.name,
      ProviderId: 1,
      Token: response.accessToken,
      UserProviderId: response.id
    }
  });
  return res;
};

export default FacebookSignInService;
