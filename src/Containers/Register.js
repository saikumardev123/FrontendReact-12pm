import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../UserSlice';

function Register() {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: '',
        password: '',
        email: ''
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
            <form style={{ textAlign: 'center' }}>
                <input onChange={updateState} type="text" name="username" placeholder="username here"></input> <br></br><br></br>
                <input onChange={updateState} type="text" name="password" placeholder="password here"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="email" placeholder="email here"></input><br></br><br></br>
                <button onClick={registerUser}>Register</button>
            </form>
        </>
    )
}
export default Register;