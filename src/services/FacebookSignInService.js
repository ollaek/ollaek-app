import Token from "../apis/oauth";

const FacebookSignInService = (response) => {
    
    const res = Token({
        method: 'post',
        url: '/api/Account/AddExternalLogin',
        data: {
          ExternalAccessToken: response.accessToken,
        }
      });

      console.log(res);
      return res;
};

export default FacebookSignInService;