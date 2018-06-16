import React, {Component} from 'react';
import './Employees.css';

class EmployeeItem extends Component {

    render() {
        console.log(this.props);
        return (
            <div className='col-md-6 col-xs-12'>
                <div className='employee-block'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12 text-center'>
                            <img src={this.props.avatar} alt='user-avatar'/>
                        </div>
                        <div className='col-lg-8 col-md-12'>
                            <h3>{this.props.first_name} {this.props.last_name}</h3>
                            <div>
                                <span><b>Employee email: </b></span>
                                <span>{this.props.email}</span>
                            </div>
                            <div>
                                <span><b>Company: </b></span>
                                <span>{this.props.company}</span>
                            </div>
                            <div>
                                <span><b>Address: </b></span>
                                <span>{this.props.adress}</span>
                            </div>
                            <div>
                                <span><b>Phone: </b></span>
                                <span>{this.props.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeItem;