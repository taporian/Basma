// import jwt from 'jsonwebtoken';

import{
  

    SIGN_UP_USER_FAILURE,
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,

} from './action-types';

// export const isValidToken = (access_token) =>{
  
//     let decoded = jwt.decode(access_token);
  
//     return new Date(decoded.exp * 1000) > new Date() ? decoded : null;
// };

const iniState ={
    // currentAdmin: localStorage.getItem("ADMIN-TOKEN")
    //     ? isValidToken(localStorage.getItem("ADMIN-TOKEN"))
    //     : null,
    currentUser:"",
        access_token_user: localStorage.getItem("USER-TOKEN")
        ? localStorage.getItem("USER-TOKEN")
        : null,
    error:"",
    loading: false,
    isAuthenticated: false,
    currentName:null,

     


};



////SIGN IN AND SIGN UP////

export const authenticationReducer = (state=iniState,action) =>{
    switch(action.type){
      
              
                    case SIGN_UP_USER_REQUEST:
                  
                        return{
                            ...state,
                            loading: true,
                            currentUser: "",
                            isAuthenticated:false,
                        };
                  
                    case SIGN_UP_USER_FAILURE:
                 
                       
                        return {
                            ...state,
                            loading: false,
                            error: action.payload,
                            currentUser: null,
                            isAuthenticated: false,
                        };
                    case SIGN_UP_USER_SUCCESS:
                  
                        
                        return{
                            ...state,
                            loading:false,
                            access_token_user: action.payload.access_token,
                            currentUser: action.payload.email,
                            currentName: action.payload.user_name.name,
                            isAuthenticated: true,
                        };
                  
                        default:
                            return{state};       
    }
};



export default authenticationReducer;