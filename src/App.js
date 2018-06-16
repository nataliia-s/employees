import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import configureStore from './store/configureStore';
import './App.css';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Provider store={store}>
                        <Main/>
                    </Provider>
                </div>
            </div>
        );
    }
}

export default App;
