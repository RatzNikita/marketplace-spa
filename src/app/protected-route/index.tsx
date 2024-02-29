import React from "react";
import {Navigate, Route, RouteProps} from "react-router-dom";

interface Props {
    component: React.ComponentType<RouteProps>;
    isAuthenticated: boolean;
}

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }: Props) => (
    <Route
        {...rest}
        Component={props =>
            isAuthenticated
                ? <Component {...props} />
                : <Navigate to="/login" replace />
        }
    />
);

export default ProtectedRoute;