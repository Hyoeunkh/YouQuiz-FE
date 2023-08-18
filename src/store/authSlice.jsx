import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    
    initialState: {
        status : null,
        data : null,
        role : null,
    },
    reducers: {
        setAuth : (state, action) => {
            state.status = action.payload.status;
            state.data = action.payload.data;
            state.role = action.payload.role;
        }
    },
});

export const AuthFetchThunk = (role, id, pw) => {
    return async (dispatch) => {
        dispatch(authActions.setAuth({
            state : "fetching",
            data : null,
            role : null,
        }));

        const request = async () => {
            const response = await fetch(`/login/${role}`, {
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body : {
                    useId : id,
                    password : pw
                }
            });
            if(!response.ok) throw new Error("Login Failed!");
            return response.json();
        }

        try{
            const data = request();
            console.log(data);
            dispatch(authActions.setAuth({
                state : "success",
                data : 123,
            }));
        }catch(err){
            console.log(err);
        }
    }
}


export const authActions = authSlice.actions;