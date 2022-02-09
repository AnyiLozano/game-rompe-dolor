import { combineReducers } from "@reduxjs/toolkit";
import useTestReducers from "./test";
import useLoginReducers from './login';

const useReducers = () => {
    /** Test Reducers */
    const { test } = useTestReducers();

    /** Login Reducers */
    const { login, levels } = useLoginReducers();

    return combineReducers(
        Object.assign({
            test,
            login,
            levels
        })
    );
};

export default useReducers;