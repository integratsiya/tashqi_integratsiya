import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./Pages/Home/HomePage";
import LawyersPage from "./Pages/Lawyers/LawyersPage";
// import LoginPage from "./Pages/Login/LoginPage";
import NewsPage from "./Pages/News/NewsPage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        {/* <Route path="/login">
          <LoginPage />
        </Route> */}
        <Route ute path="/" exact>
          <HomePage />
        </Route>
        <Route path="/news" exact>
          <NewsPage />
        </Route>
        <Route path="/lawyers" exact>
          <LawyersPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
