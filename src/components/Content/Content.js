import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Employees from './Employees';
import AboutPage from './AboutPage';

class Content extends Component {

    render() {
        return (
            <Switch>
                <Route exact
                       path="/"
                       render={(props) => <Employees {...props}/>}
                />
                <Route exact
                       path="/employees"
                       render={(props) => <Employees {...props}/>}
                />
                <Route path="/about" component={AboutPage}/>
            </Switch>
        )
    }
}

export default Content;