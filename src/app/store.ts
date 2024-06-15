// ** Redux
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// ** Features
import { musicApi } from "@/features/music/apiSlice";
import songsReducer from "@/features/music/musicSlice";


export const store = configureStore({
    reducer: {
        [musicApi.reducerPath]: musicApi.reducer,
        songs: songsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(musicApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;