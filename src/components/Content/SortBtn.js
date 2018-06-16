import React, {Component} from 'react';

class SortBtn extends Component {

    _sort(field) {
        return this.props.sort(field);
    }

    render() {
        return (
            <button className='sort-btn' onClick={this._sort.bind(this, this.props.field)}>
                Sort by {this.props.fieldName} {this.props.sortField === this.props.field &&
                <i className={`sort-arrow sort-arrow--${this.props.sortDirection}`}></i>}
            </button>
        )
    }
}

export default SortBtn;