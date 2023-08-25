import { configureStore} from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";
import { chapSlice } from "./chapSlice";
import { teacherSlice } from "./teacherSlice";
import { resultSlice } from "./resultSlice";
import { chapIdSlice } from "./chapIdSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        chap: chapSlice.reducer,
        teacher: teacherSlice.reducer,
        result: resultSlice.reducer,
        chap_id: chapIdSlice.reducer,
    }

})