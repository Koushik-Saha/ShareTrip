import React, {Suspense} from "react";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layouts/Header";

function App() {
    return (
        <Router>
            <Header/>
            <Suspense fallback={null}>
                <Routes/>
            </Suspense>
        </Router>
    );
}

export default App;
