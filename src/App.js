import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import React from 'react';
import HomePage from '../src/components/home/HomePage';
import AboutPage from '../src/components/about/AboutPage';
import Header from './components/common/Header'
import PageNotFound from "./components/pagenotfound/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;
