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

  const { useRedux, useInterceptor } = useConfig();
  const { store, persistor } = useRedux();
  useInterceptor(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <DefaultToast />
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
