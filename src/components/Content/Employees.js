import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReduxLazyScroll from 'redux-lazy-scroll';
import EmployeeItem from './EmployeeItem';
import * as employeesActions from './../../actions/index';
import Sorting from './Sorting';

class Employees extends Component {

    constructor(props) {
        super(props);
        this._loadMore = this._loadMore.bind(this);
    }

    _loadMore() {
        const {page, sortField, sortDirection} = this.props.employeesEntity;
        this.props.employeesActions.fetchEmployees(page, sortField, sortDirection);
    }

    render() {
        const {employees, isFetching, errorMessage, hasMore} = this.props.employeesEntity;

        return (
            <Fragment>
                <Sorting/>
                <ReduxLazyScroll
                    isFetching={isFetching}
                    errorMessage={errorMessage}
                    loadMore={this._loadMore}
                    hasMore={hasMore}
                >

                    <div className='row'>
                        {employees && employees.map(employee => <EmployeeItem key={employee.id}
                                                                              first_name={employee.first_name}
                                                                              last_name={employee.last_name}
                                                                              email={employee.email}
                                                                              avatar={employee.avatar}
                                                                              company={employee.company}
                                                                              adress={employee.adress}
                                                                              phone={employee.phone}/>)}
                    </div>
                </ReduxLazyScroll>
                <div className="row posts-lazy-scroll__messages">
                    {isFetching && <div className="col alert alert-info"> Loading more employees... </div>}

                    {errorMessage && <div className="col alert alert-danger">{errorMessage}</div>}
                </div>
            </Fragment>
        )
    }
}

Employees.propTypes = {
    employeesEntity: PropTypes.shape({
        errorMessage: PropTypes.string,
        isFetching: PropTypes.bool,
        page: PropTypes.number,
        employees: PropTypes.array,
        hasMore: PropTypes.bool,
        sortField: PropTypes.string,
        sortDirection: PropTypes.string
    }),
    employeesActions: PropTypes.shape({
        fetchEmployees: PropTypes.func
    })
};
Employees.defaultProps = {};

const mapDispatchToProps = (dispatch) => ({
    employeesActions: bindActionCreators(employeesActions, dispatch)
});

const mapStateToProps = state => {
    return {
        employeesEntity: state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
