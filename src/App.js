import Header from "./components/Header";
import Footer from "./components/Footer";
import Cv from "./components/Cv";
import Portfolio from "./components/Portfolio";
import OmMig from "./components/OmMig";
import Home from "./components/Home";

import "./App.css";

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { useState } from "react";

function App(){
return(
    <Router>
        <Header />
        <main>
            <Switch>
                <Route path='/omMig'>
                    <OmMig />
                </Route>
                <Route path='/Cv'>
                    <Cv />
                </Route>
                <Route path='/Portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
        </main>
        <Footer />
    </Router>
)
}

export default App;