import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/Home';
import Navbar from './navbar/Navbar';


export default function Routes() {
    return (
        <div>
            <Navbar/>
              <Switch>
              <Route path="/" component={Home}/>
              </Switch>
        </div>
    )
}

function LoginRouteUser({ path, component: Component, token, ...props }) {
    return (
        <Route
            {...props}
            path={path}
            render={(props) =>
                token ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );
}
function PrivateRouteUser({ path, component: Component, token, ...props }) {
    return (
        <Route
            {...props}
            path={path}
            render={(props) =>
                token ? <Component {...props} /> : <Redirect to="/signin" />
            }
        />
    );
}
