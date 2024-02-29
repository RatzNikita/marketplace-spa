import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "app/api";
import {Form} from "entities/auth/auth-form";


export const registration = createAsyncThunk(
    '/registration',
    (arg : Form, thunkAPI) => $api.post('/registration',arg)
        .then((res) => {
            console.log(res.data)
        })
)

export const login = createAsyncThunk(
    '/login',
    (arg : Form, thunkAPI) => $api.post('/login',arg)
        .then((res) => res.data)
)