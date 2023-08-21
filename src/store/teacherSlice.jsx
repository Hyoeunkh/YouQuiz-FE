import { createSlice } from "@reduxjs/toolkit";

export const teacherSlice = createSlice({
    name:"teacher_chap_id",
    
    initialState: {
        status : null,
        data: null
    },
    reducers: {
        setTeacher: (state, action) => {
            state.status = action.payload.status;
            state.data = action.payload.data;
        }
    },
});

export const TeacherFetchThunk = () => {
    return async (dispatch) => {
        dispatch(teacherActions.setTeacher({
            status : "fetching",
            data: null
        }));

        const request = async () => {
            const response = await fetch(`http://101.101.219.109:8080/teacher/1/study`);
            if(!response.ok) throw new Error("Failed!");
            // console.log("response" + response.json());
            return response.json();
        }

        try{
            const data = await request();
            
            dispatch(teacherActions.setTeacher({
                status : "success",
                data : data
            }));
        }catch(err){
            
            dispatch(teacherActions.setTeacher({
                status: "failed",
                data : null
            }))
        }
    }
}


export const teacherActions = teacherSlice.actions;