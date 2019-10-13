
import Token from "../apis/oauth";

export const SignInService =  (user) => {
  
    return Token({
        method: "post",
        url: "/token",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        data: 'userName=' + user.email + '&password=' + user.password + '&grant_type=password'
      }).catch((error)=>{
          return error.response;
      });
    

  
};
