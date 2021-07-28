import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BannerImage from "./components/BannerImage/BannerImage";
import Footer from "./components/Footer/Footer";
import { GlobalContainer } from "./components/globalStyle/GlobalContainer";
import Information from "./components/Information/Information";
import Main from "./components/Main/Main";
import SearchResults from "./components/Main/SeconsMain/SearchResults";
import MoreNews from "./components/MoreNews/MoreNews";
import Navigation from "./components/Navigation/Navigation";
import UserModal from "./components/UserModal/UserModal";

const App = () => {
  return (
    <Router>
      <div className="App">
        <GlobalContainer fluid>
          <Navigation />
          <BannerImage />
          <Switch>
            <Route path="/SearchResults">
              <SearchResults />
            </Route>
            <Route path="/">
              {/* <Main /> */}
              {/* <Information/> */}
              <UserModal/>
            </Route>
            <Route path="/MoreNews">
              <MoreNews />z
            </Route>
          </Switch>
          <Footer />
        </GlobalContainer>
      </div>
    </Router>
  );
};

export default App;
