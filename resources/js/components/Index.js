import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Homepage from './Homepage'
import Login from './Login'
import Sidebar from './Sidebar'
import Footer from './Footer';


function Index() {
    return (
        <Router>
            <div className="Index">

            <div className="page">
            <div className="page-main">

            <Sidebar />
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/" component={Login} />

            </div>
            
            <Footer />

            </div>

            </div>
        </Router>
    );
}

export default Index;

if (document.getElementById('md-root')) {
    ReactDOM.render(<Index />, document.getElementById('md-root'));
}
