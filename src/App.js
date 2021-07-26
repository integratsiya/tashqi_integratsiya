import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BannerImage from "./components/BannerImage/BannerImage";
import Footer from "./components/Footer/Footer";
import { GlobalContainer } from "./components/globalStyle/GlobalContainer";
import Main from "./components/Main/Main";
import SearchResults from "./components/Main/SeconsMain/SearchResults";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <Router>
      <div className="App">
        <GlobalContainer fluid>
          <Navigation />
          <BannerImage />
          <Switch>
            <Route path="/hello">
              <SearchResults />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
          <Footer />
        </GlobalContainer>
      </div>
    </Router>
  );
};

export default App;
