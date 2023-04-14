import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const UserSlice = createSlice(
    {
        name: 'user',
        initialState: {
            value: false
        },
        reducers: {
            register: (form) => {
                console.log("I am in action");
                axios.post("http://localhost:9091/user/register", form).then(
                    response => {
                        console.log(response);
                        return response;
                    },
                    error => {
                        console.log(error)
                    }
                )
            }
        },
    }
)
export const { register } = UserSlice.actions
export default UserSlice.reducer;
