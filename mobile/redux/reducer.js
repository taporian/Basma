// import jwt from 'jsonwebtoken';

import{
  

    SIGN_IN_ADMIN_FAILURE,
    SIGN_IN_ADMIN_REQUEST,
    SIGN_IN_ADMIN_SUCCESS,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILURE,

    GET_ALL_USERS_COUNT_REQUEST,
    GET_ALL_USERS_COUNT_SUCCESS,
    GET_ALL_USERS_COUNT_FAILURE,

} from './action-types';


const iniState ={
    // currentAdmin: localStorage.getItem("ADMIN-TOKEN")
    //     ? isValidToken(localStorage.getItem("ADMIN-TOKEN"))
    //     : null,
    currentAdmin:"",
        // access_token_user: localStorage.getItem("USER-TOKEN")
        // ? localStorage.getItem("USER-TOKEN")
        // : null,
        access_token:"",
    error:"",
    loading: false,
    isAuthenticated: false,
    currentName:null,
    errorUser:"",
    userData:[],
    errorCount:"",
    countData:[],

     


};



////SIGN IN AND SIGN UP////


export const authenticationReducer = (state=iniState,action) =>{
    switch(action.type){
        case SIGN_IN_ADMIN_REQUEST:
     
   
            return{
                ...state,
                loading: true,
                currentAdmin: "",
                isAuthenticated:false,
            };
        case SIGN_IN_ADMIN_FAILURE:
      
    
            return {
                ...state,
                loading: false,
                error: action.payload,
                currentAdmin: null,
                isAuthenticated: false,
            };
  
        case SIGN_IN_ADMIN_SUCCESS:
            
            return{
                ...state,
                loading:false,
                access_token: action.payload.access_token,
                currentAdmin: action.payload.email,
                isAuthenticated: true,
            };
     
           
                        default:
                            return{state};       
    }
};
export const fetchUsersReducer = (state=iniState,action) =>{
    switch(action.type){
      
        case GET_ALL_USERS_REQUEST:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ALL_USERS_SUCCESS:
           
            return{
                ...state,
                loading:false,
                errorUser:null,       
                userData:action.payload
            };
        case GET_ALL_USERS_FAILURE:
            return{
                ...state,
                loading:false,
            
                errorUser:action.payload,     
               
            };
            default:
                return{...state};
    }
}

export const fetchUserCountReducer = (state=iniState,action) =>{
    switch(action.type){
      
        case GET_ALL_USERS_COUNT_REQUEST:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ALL_USERS_COUNT_SUCCESS:
           
            return{
                ...state,
                loading:false,
                errorCount:null,       
                countData:action.payload
            };
        case GET_ALL_USERS_COUNT_FAILURE:
            return{
                ...state,
                loading:false,
                countData:null,
                errorCount:action.payload,     
               
            };
            default:
                return{...state};
    }
}


export default authenticationReducer;