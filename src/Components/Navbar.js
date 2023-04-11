import './Navbar.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
function Navbar() {
    return (
        <>
            <Router>
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/register">Register</Link>
                <Routes>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default Navbar;
