import { BrowserRouter, Route, Switch } from "react-router-dom";
import C2F from "./Component/C2F/index";
import PageNotFound from "./Component/PageNotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Mini-Project-Convertion" component={C2F} exact={true} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
