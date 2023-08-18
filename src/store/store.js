import { configureStore} from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";
import { chapSlice } from "./chapSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        chap: chapSlice.reducer,
    }

})