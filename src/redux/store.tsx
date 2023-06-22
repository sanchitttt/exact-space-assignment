import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer: {
        'chat': chatSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;