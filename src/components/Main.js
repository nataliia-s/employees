import React, {Component, Fragment} from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import './Main.css';

class Main extends Component {

    render() {
        return (
            <Fragment>
                <div className="row header">
                    <div className="col">
                        <Header/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Content/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Main;