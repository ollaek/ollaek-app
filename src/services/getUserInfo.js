
import Token from "../apis/account";

export const getUserInfo =  () => {
  
    return Token.get(`/api/Account/UserInfo`,
      ).catch((error)=>{
          return error.response;
      });
    
};