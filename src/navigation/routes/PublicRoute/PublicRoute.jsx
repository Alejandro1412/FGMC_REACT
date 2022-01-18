//Packages
import React from "react";
import PropTypes from "prop-types";

//Hooks
import useControllers from "../../../controllers";
import useNavigation from "../..";

const PublicRoute = (props) => {
  const { component, redirect, message, ...rest } = props;

  const { useRoutes } = useNavigation();
  const { GeneralRoute } = useRoutes();

  const { useRoutesHooks } = useControllers();
  const { usePublicRoute } = useRoutesHooks();
  const { props: properties, permission } = usePublicRoute();

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

PublicRoute.defaultProps = {
  redirect: null,
  message: null,
};
PublicRoute.propTypes = {
  redirect: PropTypes.string,
  message: PropTypes.element,
  component: PropTypes.elementType.isRequired,
};
export default PublicRoute;
