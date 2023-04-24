import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../UserSlice';

function Register() {

    var appState = useSelector(appState => appState);

    // var displayData = appState.isUserLoggedIn.value;

    console.log("appState", appState);

    if (appState.isUserLoggedIn.value != "notLoggedIn") {
        appState.isUserLoggedIn.then(data => {
            console.log("data", data);
            console.log(data.value);
            appState.isUserLoggedIn.value = data.value
        }
        );

    }
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        username: '',
        password: '',
        email: '',
        role: 'customer'
    })
    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setForm({ ...form, [name]: value });
    }
    const registerUser = (event) => {
        event.preventDefault();
        console.log(form);
        dispatch(register(form));
    }
    return (
        <>
            <br></br><br></br>
            <h1 style={{ textAlign: 'center' }}>Register here</h1>
            <div class="container mt-3">
                <form>
                    <div className="row">
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="username here" name="username" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="password" className="form-control" placeholder="Enter password" name="password" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter email" name="email" />
                        </div>
                    </div>

                    <br></br><br></br>
                    <center><button onClick={registerUser} className="btn btn-primary">Register</button></center>
                </form>
            </div>


        </>
    )
}
export default Register;