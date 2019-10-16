
import Token from "../apis/oauth";

export const getUserInfo =  () => {
  
    return Token.get(`/api/Account/UserInfo`,
      ).catch((error)=>{
          return error.response;
      });
    
};