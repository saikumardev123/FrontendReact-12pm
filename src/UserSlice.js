import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const UserSlice = createSlice(
    {
        name: 'user',
        initialState: {
            value: "notLoggedIn"
        },
        reducers: {
            register: async (state, action) => {
                // console.log("form", form);
                // console.log("I am in action");
                console.log("state", state);
                console.log("action", action);
                console.log("before");

                const response = await axios.post("http://localhost:9091/user/register", action.payload);
                console.log("response", response.data.statusCode);
                if (response.data.statusCode == 200) {
                    console.log("inside");
                    state.value = "Registered";
                    return state;
                }

                // axios.post("http://localhost:9091/user/register", action.payload).then(
                //     response => {
                //         console.log(response);
                //         state = response;
                //         return state;
                //     },
                //     error => {
                //         console.log(error)
                //     }
                // )
                // console.log("after");
            },

            login: async (state, action) => {
                // console.log("form", form);
                // console.log("I am in action");
                console.log("state", state);
                console.log("action", action);
                console.log("before");

                const response = await axios.post("http://localhost:9091/user/login", action.payload);
                console.log("response", response.data.statusCode);
                if (response.data.statusCode == 200) {
                    console.log("inside");
                    state.value = "loggedIn";
                    return state;
                }

                // axios.post("http://localhost:9091/user/register", action.payload).then(
                //     response => {
                //         console.log(response);
                //         state = response;
                //         return state;
                //     },
                //     error => {
                //         console.log(error)
                //     }
                // )
                // console.log("after");
            }

        },
    }
)
export const { register, login } = UserSlice.actions
export default UserSlice.reducer;
