import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import {
    authenticationReducer,
    fetchUsersReducer,
    fetchUserCountReducer
} from './reducer'


const createRootReducer = () =>
combineReducers({
    authenticationReducer,
    fetchUsersReducer,
    fetchUserCountReducer
});

const initState = {
    authenticationReducer: {
        currentAdmin: null,
      access_token: "",
      error: "",
      loading: false,
      isAuthenticated: false,
      currentName:"",
     
    },
    fetchUsersReducer:{
        loading: false,
        userData:[],
        errorUser:"",
    },
    fetchUserCountReducer:{
        loading: false,
        errorCount:"",
        countData:[],
    }

    
}

export default function makeStore(initialState = initState) {
    let composeEnhancers = compose;
    const middlewares = [thunk];
  
  
    const store = createStore(
      createRootReducer(),
      initialState,
      composeEnhancers(applyMiddleware(...middlewares))
    );
  
    // if (module.hot) {
    //   module.hot.accept("./reducer", () => {
    //     const nextReducer = require("./reducer").default;
    //     store.replaceReducer(nextReducer);
    //   });
    // }
    return store;
}