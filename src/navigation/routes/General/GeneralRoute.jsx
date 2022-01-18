//Packages
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const GeneralRoute = (props) => {
  const {
    component: Component,
    redirect,
    message,
    permission,
    properties,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return (
          <>
            {message}
            {permission ? (
              <Component {...properties} />
            ) : (
              redirect && (
                <Redirect
                  to={{
                    pathname: redirect,
                    state: { from: location },
                  }}
                />
              )
            )}
          </>
        );
      }}
    />
  );
};
GeneralRoute.defaultProps = {
  redirect: null,
  message: null,
  permission: false,
  properties: {},
};
GeneralRoute.propTypes = {
  redirect: PropTypes.string,
  message: PropTypes.element,
  component: PropTypes.elementType.isRequired,
  controller: PropTypes.string,
  permission: PropTypes.bool,
  properties: PropTypes.object,
};
export default GeneralRoute;
