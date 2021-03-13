import { useState } from "react";
import Home from './Home';
import Menu from './Menu';
import OurStory from "./OurStory";
import Navbar from './Navbar';
import Photos from './Photos'
import Contact from "./Contact";
import {Button} from '@material-ui/core';
import {buttonText} from "./messages/button";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./App.css"
import { Helmet } from "react-helmet"

const App = () => {
  const [lang, setLang] = useState("en")

  return (
    <Router>
      <div className="App">
        <Navbar lang={lang}/>
        <Button
          onClick={() => lang === "en" ? setLang("sp") : setLang("en")}
          color="primary"
          variant="contained"
        >
          {buttonText[lang]}
        </Button>

        <Switch>
          <Route
            path="/menu"
            render={props => <Menu lang={lang} {...props} />}
            />
          <Route
            path="/our-story"
            render={props => <OurStory lang={lang} {...props}/>}
            />
          <Route
            path="/photos"
            render={props => <Photos lang={lang} {...props} />}
            />
          <Route
            path="/contact-us"
            render={props => <Contact lang={lang} load="page" {...props} />}
            />
          <Route
            exact path="/"
            render={props => <Home lang={lang} {...props} />}
            />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
