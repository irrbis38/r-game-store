import { Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/home-page/";
import { Header } from "./components/header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
