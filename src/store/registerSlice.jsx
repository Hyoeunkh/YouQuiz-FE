import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : null,
    id : null,
    password : null,
    username : null,
    birth : null,
    sex : null,
    phoneNumber : null,
  };

export const registerSlice = createSlice({
    name:"register",
    initialState,
    reducers: {
        setRegister : (state, action) => {
            state.status = action.payload.status;
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    }
});

export const RegisterFetchThunk = (role, id, password, username, birth, sex, phoneNumber) => {
    return async (dispatch) => {
        dispatch(registerActions.setRegister({
            status : "fetching",
            id : null,
            username : null,
            password : null,
        }));

        const request = async () => {
            const response = await fetch(`http://101.101.219.109:8080/register/${role}`, {
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    "userId" : id,
                    "password" : password,
                    "username": username,
                    "birth": birth,
                    "sex": sex,
                    "phoneNumber": phoneNumber,
                })
            });
            if(!response.ok) throw new Error("Register Failed!");
            
            return response.json();
        }

        try{
            const data = await request();
            
            dispatch(registerActions.setRegister({
                status : "success",
                id : data.id,
                username : data.username,
                role : role
            }));
        }catch(err){
            
            dispatch(registerActions.setRegister({
                status: "failed",
                id : null,
                username: null,
                role : null
            }))
        }
    }
}


export const registerActions = registerSlice.actions;