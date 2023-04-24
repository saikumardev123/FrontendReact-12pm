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
            <div class="container mt-3">
                <form>
                    <div class="row">
                        <div class="col">
                            <input onChange={updateState} placeholder="username here" type="text" class="form-control" name="username" />
                        </div>
                        <div class="col">
                            <input onChange={updateState} type="password" class="form-control" placeholder="Enter password" name="password" />
                        </div>
                    </div>
                    <br></br>
                    <center><button onClick={loginUser} className="btn btn-primary">Login</button></center>
                </form>
            </div>

        </>
    )
}
export default Login;