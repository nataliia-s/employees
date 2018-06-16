import axios from 'axios';
import {API_URL} from "../config";

export const EMPLOYEES_REQUEST = 'EMPLOYEES_REQUEST';
export const EMPLOYEES_SUCCESS = 'EMPLOYEES_SUCCESS';
export const EMPLOYEES_FAILURE = 'EMPLOYEES_FAILURE';
export const EMPLOYEES_SORT = 'EMPLOYEES_SORT';

export const requestError = (error) => ({
    type: EMPLOYEES_FAILURE,
    errorMessage: error
});

export const employeesSort = (sortField, sortDirection) => ({
    type: EMPLOYEES_SORT,
    sortField: sortField,
    sortDirection: sortDirection
});

export const employeesSuccess = (employees) => {
    return {
        type: EMPLOYEES_SUCCESS,
        employees,
        hasMore: employees.length > 0
    }
};

export const requestEmployees = (page) => ({
    type: EMPLOYEES_REQUEST,
    page: page + 1
});

export function fetchEmployees(page, sortField, sortDirection) {
    return (dispatch) => {
        dispatch(requestEmployees(page));
        return axios.get(`${API_URL}/employees?_page=${page}${sortField ? '&_sort=' + sortField : ''}${sortDirection ? '&_order=' + sortDirection : ''}`)
            .then(response => {
                const {data} = response;
                if (response.status === 200) {
                    dispatch(employeesSuccess(data));
                } else {
                    dispatch(requestError(data.error));
                }
            })
            .catch((error) => dispatch(requestError(error.message)));
    }
}