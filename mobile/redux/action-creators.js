import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  
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


import { URL_Admin } from "../components/URL";






/////////////////////////ADMIN///////////////////////////////////////////////////////////////////////////////////



const signInRequestAdmin = () =>{
    return {
        type: SIGN_IN_ADMIN_REQUEST
    };
};

const signInSuccessAdmin = (payload) =>{
    return {
        type: SIGN_IN_ADMIN_SUCCESS,
        payload
    };
};

const signInFailureAdmin = (error) =>{
 
    return {
        type: SIGN_IN_ADMIN_FAILURE,
        payload: error,
    };
};

export const signinAdmin = (payload,navigation) =>{
   
    return async function (dispatch) {
      
        dispatch(signInRequestAdmin);
        try{
    
           const res= await axios({
                method:"POST",
                url: URL_Admin+"/login",
                data:payload,
                headers:{
                    "Content-type":"application/json",
                    "Accept":"application/json",
                }
            })           
              
        
            // AsyncStorage.setItem("ADMIN-TOKEN", JSON.stringify(res.data.access_token));
            await AsyncStorage.setItem("ADMIN-TOKEN", res.data.access_token);
                dispatch(signInSuccessAdmin(res.data));
                navigation.navigate('home');
              
        }catch(error){
            if(error.response && error.response.status === 400){
            
                dispatch(signInFailureAdmin(error.response.data));
            
           }
           else{
           
               dispatch(signInFailureAdmin(error.response.data));
           }
           
           
        }
        
    };
};

//////////// FETCH USERS //////////
const fetchUsersRequest = () =>{
    return{
        type: GET_ALL_USERS_REQUEST,
        payload: {
            loading: true
          }
    };
};

const fetchUsersSuccess = (userData) =>{
    console.log('result',userData)
    return{
        type: GET_ALL_USERS_SUCCESS,
        payload: {
            userData
        }
    };
};

const fetchUsersFailure = (errorUser) =>{
    return {
        type: GET_ALL_USERS_FAILURE,
        payload:errorUser
    };
};


export const fetchUsers = (offset,search) =>{
       
    return async function (dispatch) {
       
        console.log('search',search)
        if(search ==="" && offset>0){
            dispatch(fetchUsersRequest());
            try{
              
                const token = await AsyncStorage.getItem("ADMIN-TOKEN");
                const res = await axios({
                        method:"POST",
                        url: URL_Admin+'/getAllUsers?page='+offset,
                   
                        headers:{
                            "Content-type":"application/json",
                            "Accept":"application/json",
                            Authorization: `Bearer ${token}`,
                        },
                       
                                       
                    });                
                           
                    
                  console.log('result',res.data)
                    dispatch(fetchUsersSuccess(res.data));
                           
                    
            }catch(errorUser){
                console.log('error',errorUser.response.data)
                    dispatch(fetchUsersFailure(errorUser.response.data));
                    
            }
        }
        else{
            dispatch(fetchUsersRequest());
            try{
             
                
                console.log(search);
                const token = await AsyncStorage.getItem("ADMIN-TOKEN");
                const res = await axios({
                        method:"POST",
                        url: URL_Admin+'/getAllUsers',
                        headers:{
                            "Content-type":"application/json",
                            "Accept":"application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        data:search,                     
                    });                
                           
                    
                  console.log('SECOND RESULT',res.data)
                    dispatch(fetchUsersSuccess(res.data));                 
                    
            }catch(errorUser){
                console.log('error',errorUser.response.data)
                    dispatch(fetchUsersFailure(errorUser.response.data));
                    
            }
        };
        }
        
       
};


//////////// FETCH COUNT USERS //////////

const fetchUserCountRequest = () =>{
    return{
        type: GET_ALL_USERS_COUNT_REQUEST,
        payload: {
            loading: true
          }
    };
};

const fetchUserCountSuccess = (countData) =>{
  
    return{
        type: GET_ALL_USERS_COUNT_SUCCESS,
        payload: {
            countData
        }
    };
};

const fetchUserCountFailure = (errorCount) =>{
    return {
        type: GET_ALL_USERS_COUNT_FAILURE,
        payload:errorCount
    };
};


export const fetchUserCount = () =>{
       
    return async function (dispatch) {
       
      
        dispatch(fetchUserCountRequest());
        try{
          
            const token = await AsyncStorage.getItem("ADMIN-TOKEN");
            const res = await axios({
                    method:"GET",
                    url: URL_Admin+'/getUserAverage',
               
                    headers:{
                        "Content-type":"application/json",
                        "Accept":"application/json",
                        Authorization: `Bearer ${token}`,
                    },
                   
                                   
                });                
                       
                
              console.log('COUNT DATA INSIDE',res.data)
                dispatch(fetchUserCountSuccess(res.data));
                       
                
        }catch(errorCount){
            console.log('error',errorCount.response.data)
                dispatch(fetchUserCountFailure(errorCount.response.data));
                
        }
    };
};
