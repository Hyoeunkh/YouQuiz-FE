import { createSlice } from "@reduxjs/toolkit";

export const chapSlice = createSlice({
    name:"chap_id",
    
    initialState: {
        status : null,
        data: null
    },
    reducers: {
        setChap : (state, action) => {
            state.status = action.payload.status;
            state.data = action.payload.data;
        }
    },
});

export const ChapFetchThunk = () => {
    return async (dispatch) => {
        dispatch(chapActions.setChap({
            status : "fetching",
            data: null
        }));

        const request = async () => {
            const response = await fetch(`http://101.101.219.109:8080/student/1/study`);
            if(!response.ok) throw new Error("Failed!");
            // console.log("response" + response.json());
            return response.json();
        }

        try{
            const data = await request();
            
            dispatch(chapActions.setChap({
                status : "success",
                data : data
            }));
        }catch(err){
            
            dispatch(chapActions.setChap({
                status: "failed",
                data : null
            }))
        }
    }
}


export const chapActions = chapSlice.actions;