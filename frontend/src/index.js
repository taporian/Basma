import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import makeStore from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";


const store = makeStore();

const WithProvider = () => (
  <BrowserRouter>
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>
  </BrowserRouter>

);

ReactDOM.render(<WithProvider />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
