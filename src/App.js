import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import useNavigation from "./navigation";
import useViews from "./views";

const App = () => {
  const { useScreens } = useViews();
  const { Login } = useScreens();

  const { useRouters } = useNavigation();
  const { AdminRouter } = useRouters();

  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminRouter} />
        <Route exact path="/" component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
