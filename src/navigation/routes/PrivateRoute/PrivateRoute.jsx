import React from "react";
import PropTypes from "prop-types";

//Hooks
import useNavigation from "../..";
import useControllers from "../../../controllers";

const PrivateRoute = (props) => {
  const { component, redirect, message, ...rest } = props;

  const { useRoutes } = useNavigation();
  const { GeneralRoute } = useRoutes();

  const { useRoutesHooks } = useControllers();
  const { usePrivateRoute } = useRoutesHooks();
  const { props: properties, permission } = usePrivateRoute();

  return (
    <GeneralRoute
      component={component}
      redirect={redirect}
      message={message}
      properties={properties}
      permission={permission}
      {...rest}
    />
  );
};

PrivateRoute.defaultProps = {
  redirect: null,
  message: null,
};
PrivateRoute.propTypes = {
  redirect: PropTypes.string,
  message: PropTypes.element,
  component: PropTypes.elementType.isRequired,
};
export default PrivateRoute;
