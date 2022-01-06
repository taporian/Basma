// import jwt from 'jsonwebtoken';

import{
  


} from './action-types';

// export const isValidToken = (access_token) =>{
  
//     let decoded = jwt.decode(access_token);
  
//     return new Date(decoded.exp * 1000) > new Date() ? decoded : null;
// };

const iniState ={
    // currentAdmin: localStorage.getItem("ADMIN-TOKEN")
    //     ? isValidToken(localStorage.getItem("ADMIN-TOKEN"))
    //     : null,
    currentAdmin:"",
    currentUser:"",
        access_token: localStorage.getItem("ADMIN-TOKEN")
        ? localStorage.getItem("ADMIN-TOKEN")
        : null,
        access_token_user: localStorage.getItem("USER-TOKEN")
        ? localStorage.getItem("USER-TOKEN")
        : null,
    error:"",
    loading: false,
    isAuthenticated: false,



     


};



////SIGN IN AND SIGN UP////

export const authenticationReducer = (state=iniState,action) =>{
    switch(action.type){
         
    }
};
//////////////////////////GUEST///////////////////////////////////////////////////////////


export default authenticationReducer;