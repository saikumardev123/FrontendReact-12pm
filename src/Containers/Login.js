import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../UserSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    var appState = useSelector(appState => appState);
    console.log("appState", appState);
    if (appState.isUserLoggedIn.value != "notLoggedIn") {
        appState.isUserLoggedIn.then(data => {
            console.log("data", data);
            if (data.value == "loggedIn") {
                if (data.role == "admin") {

                    navigate("/admin");
                }
                else {

                    navigate("/customer");
                }
            }
            console.log(data.value);
            appState.isUserLoggedIn.value = data.value
        }
        );
    }
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        username: '',
        password: '',
    })
    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setForm({ ...form, [name]: value });
    }
    const loginUser = (event) => {
        event.preventDefault();
        console.log(form);
        dispatch(login(form));
    }
    return (
        <>
            <br></br><br></br>
            <h1 style={{ textAlign: 'center' }}>Login here</h1>
            <form style={{ textAlign: 'center' }}>
                <input onChange={updateState} type="text" name="username" placeholder="username here"></input> <br></br><br></br>
                <input onChange={updateState} type="text" name="password" placeholder="password here"></input><br></br><br></br>
                <button onClick={loginUser}>Login Here</button>
            </form>

        </>
    )
}
export default Login;