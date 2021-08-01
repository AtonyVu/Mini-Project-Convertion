import { BrowserRouter, Route, Switch } from "react-router-dom";
import C2F from "./Component/C2F/index";
import C2K from "./Component/C2K";
import PageNotFound from "./Component/PageNotFound";
import Nav from "./Component/Nav";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/Mini-Project-Convertion" component={C2F} exact={true} />
          <Route path="/Mini-Project-Convertion/C2K" component={C2K} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
