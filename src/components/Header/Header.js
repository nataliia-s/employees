import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <Fragment>
                <Link to="/employees" title="Employees" className="align-self-center menu-btn">
                    Employees
                </Link>
                <Link to="/about" title="About" className="align-self-center menu-btn">
                    About
                </Link>
            </Fragment>

        )
    }
}

export default Header;