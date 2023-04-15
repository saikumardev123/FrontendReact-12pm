import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';

export default configureStore({
    reducer: {
        isUserLoggedIn: UserSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

