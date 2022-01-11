import axios from 'axios';

import {
  
    SIGN_UP_USER_FAILURE,
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,


} from './action-types';

import {toast} from "react-toastify";

import { URL_User } from "../components/URL";





/////////////////////////USER///////////////////////////////////////////////////////////////////////////////////



// SIGN UP USER

const signUpRequestUser = () =>{
    return{
        type: SIGN_UP_USER_REQUEST,
    };
};

const signUpSuccessUser = (user) =>{
    return{
        type: SIGN_UP_USER_SUCCESS,
        payload: {
            user
        }
    };
};

const signUpFailureUser = (error) =>{

    return {
        type: SIGN_UP_USER_FAILURE,
        payload:error.errors
    };
};

export const signUpUser = (user) =>{
    
    return async function (dispatch)  {
        dispatch(signUpRequestUser());
      
        try{
            const res = await axios({
                method:"post",
                url: URL_User+'/register',
                data: user,
                });
                const {data} = res.data;
               
                if(res.data.success ===false && res.status ===200 && res.data.errors){
                    dispatch(signUpSuccessUser(res.data.erros));
                    toast.success('Succefully Registered');
                  
               }
               else{
                   dispatch(signUpFailureUser(data));
                 
               }

          
        }catch(error){
                   
            if(error.response && error.response.status ===400){
                dispatch(signUpFailureUser(error.response.data));
                toast.error('Failed');
               
               
           }
           else{
               dispatch(signUpFailureUser(error));
               toast.success('Succefully Registered');
             
           }

            
             
           
        }
    };
};


