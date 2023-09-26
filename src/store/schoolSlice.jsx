import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : null,
    school_name : null,
    grade : null,
    class_num : null,
    class_code : null,
  };

export const schoolSlice = createSlice({
    name:"school",
    initialState,
    reducers: {
        setSchool : (state, action) => {
            state.status = action.payload.status;
            state.school_name = action.payload.school_name;
            state.grade = action.payload.grade;
            state.class_num = action.payload.class_num;
            state.class_code = action.payload.class_code;
        }
    }
});

export const SchoolFetchThunk = (school_name, grade, class_num, class_code) => {
    return async (dispatch) => {
        dispatch(schoolActions.setSchool({
            status : "fetching",
            school_name : null,
            grade : null,
            class_num : null,
            class_code : null,
        }));

        const request = async () => {
            const response = await fetch(`http://101.101.219.109:8080//register/schoolAuth`, {
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    "school_name":school_name,
                    "grade": grade,
                    "class_num":class_num,
                    "class_code":class_code,
                })
            });
            if(!response.ok) throw new Error("School Failed!");
            
            return response.json();
        }

        try{
            const data = await request();
            
            dispatch(schoolActions.setSchool({
                status : "success",
                school_name : data.school_name,
                grade : data.grade,
                class_num : data.class_num,
                class_code : data.class_code
            }));
        }catch(err){
            
            dispatch(schoolActions.setSchool({
                status: "failed",
                school_name : null,
                grade : null,
                class_num : null,
                class_code : null
            }))
        }
    }
}


export const schoolActions = schoolSlice.actions;