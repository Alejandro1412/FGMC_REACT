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
  const { useScreens } = useViews();
  const { Login } = useScreens();

  const { useRouters } = useNavigation();
  const { AdminRouter } = useRouters();

  const { useInterceptor, useRedux } = useConfig();
  const { store, persistor } = useRedux();
  useInterceptor();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Switch>
            <Route path="/admin" component={AdminRouter} />
            <Route exact path="/" component={Login} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
