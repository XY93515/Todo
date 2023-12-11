import axios from 'axios';

import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, 
    TOGGLE_TAB ,SEARCH_TODO} from './type';

const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`/todos`, {data});
        dispatch({ type: ADDNEW_TODO , payload: res.data });
    } catch (error) 
    {
        console.log('Error while calling addNewTodo API ', error.message);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`/todos`);

        dispatch({ type: GETALL_TODO , payload: res.data});
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/todos/${id}`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const updateTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.put(`/todos/${data.todo_id}`, { data });
        dispatch({ type: UPDATE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}



export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}

export const searchTodo = (data) => async (dispatch) => {
    try {
        console.log("hloo");
       const res=await axios.get(`/search/${data.values}`);
       console.log(res);
       dispatch({type:SEARCH_TODO,payload:res.data});
    } catch (error) {
        console.log('Error while searching Product ', error.message);
    }
}


