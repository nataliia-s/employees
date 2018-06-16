import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import * as sortActions from "../../actions";
import SortBtn from './SortBtn';
import './Sorting.css';

class Sorting extends Component {

    sort(field) {
        const {sortField, sortDirection} = this.props.sortEntity;

        let direction = 'asc';
        if (sortField === field && sortDirection === 'asc') {
            direction = 'desc'
        }

        this.props.sortActions.employeesSort(field, direction);
    }

    render() {
        const {sortField, sortDirection} = this.props.sortEntity;
        return (
        <Fragment>
            <SortBtn fieldName='first name' field='first_name' sortField={sortField} sortDirection={sortDirection} sort={this.sort.bind(this)}/>
            <SortBtn fieldName='last name' field='last_name' sortField={sortField} sortDirection={sortDirection} sort={this.sort.bind(this)}/>
            <SortBtn fieldName='company' field='company' sortField={sortField} sortDirection={sortDirection} sort={this.sort.bind(this)}/>
            <SortBtn fieldName='email' field='email' sortField={sortField} sortDirection={sortDirection} sort={this.sort.bind(this)}/>
        </Fragment>
        )
    }
}

Sorting.propTypes = {
    sortEntity: PropTypes.shape({
        sortDirection: PropTypes.string,
        sortField: PropTypes.string
    }),
    sortActions: PropTypes.shape({
        sortEmployees: PropTypes.func
    })
};

Sorting.defaultProps = {};

const mapDispatchToProps = (dispatch) => ({
    sortActions: bindActionCreators(sortActions, dispatch)
});

const mapStateToProps = state => {
    return {
        sortEntity: state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
