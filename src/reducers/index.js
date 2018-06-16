import * as actions from '../actions';

const initialState = {isFetching: false, employees: [], errorMessage: '', page: 1, hasMore: true};

export default function employees(state = initialState, action) {
    switch (action.type) {
        case actions.EMPLOYEES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                page: action.page,
                hasMore: true
            });

        case actions.EMPLOYEES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                employees: state.employees.concat(action.employees),
                hasMore: action.hasMore
            });

        case actions.EMPLOYEES_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.errorMessage,
                hasMore: false
            });

        case actions.EMPLOYEES_SORT:
            return Object.assign({}, state, {
                isFetching: initialState.isFetching,
                employees: initialState.employees,
                hasMore: initialState.hasMore,
                page: initialState.page,
                sortField: action.sortField,
                sortDirection: action.sortDirection
            });

        default:
            return state;
    }
}