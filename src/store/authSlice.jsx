import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    
    initialState: {
        status : null,
        id : null,
        username : null,
        role : null,
    },
    reducers: {
        setAuth : (state, action) => {
            state.status = action.payload.status;
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.role = action.payload.role;
        }
    },
});

export const AuthFetchThunk = (role, id, pw) => {
    return async (dispatch) => {
        dispatch(authActions.setAuth({
            status : "fetching",
            id : null,
            username : null,
            role : null,
        }));

        const request = async () => {
            const response = await fetch(`http://101.101.219.109:8080/login/${role}`, {
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    "userId" : id,
                    "password" : pw
                })
            });
            if(!response.ok) throw new Error("Login Failed!");
            
            return response.json();
        }

        try{
            const data = await request();
            
            dispatch(authActions.setAuth({
                status : "success",
                id : data.id,
                username : data.username,
                role : role
            }));
        }catch(err){
            
            dispatch(authActions.setAuth({
                status: "failed",
                id : null,
                username: null,
                role : null
            }))
        }
    }
}


export const authActions = authSlice.actions;