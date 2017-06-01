import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import AppBar from 'material-ui/AppBar';

const MainRouter = () => (
    <Router>
        <div>
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
);

export default MainRouter;