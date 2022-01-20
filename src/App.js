//Packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//Hooks
import useConfig from "./config";
import useNavigation from "./navigation";
import useViews from "./views";

const App = () => {
  const { useScreens, useComponents } = useViews();

  const { useToasts, useLoaders } = useComponents();
  const { DefaultLoader } = useLoaders();
  const { DefaultToast } = useToasts();

  const { Login } = useScreens();

  const { useRouters, useRoutes } = useNavigation();
  const { PublicRoute } = useRoutes();
  const { AdminRouter } = useRouters();

  const { useInterceptor, useRedux } = useConfig();
  const { store, persistor } = useRedux();
  const { showToast, handleHideToast, toastMessage, toastType } =
    useInterceptor();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <DefaultToast
          showToast={showToast}
          handleHideToast={handleHideToast}
          message={toastMessage}
          type={toastType}
        />
        <DefaultLoader />
        <Router>
          <Switch>
            <Route path="/admin" component={AdminRouter} />
            <PublicRoute exact path="/" component={Login} redirect="/admin" />
            <Redirect to="/" />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
