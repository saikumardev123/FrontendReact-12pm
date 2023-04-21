import './Navbar.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import Product from '../Containers/Product';
import AdminDashboard from '../Containers/AdminDashboard';
import CustomerDashboard from '../Containers/CustomerDashboard';
import { useSelector } from 'react-redux';
function Navbar() {
    var appState = useSelector(appState => appState);

    var role;
    var isLoggedIn;

    if (appState.isUserLoggedIn.value != "notLoggedIn") {
        appState.isUserLoggedIn.then(data => {
            console.log("data", data);
            if (data.value == "loggedIn") {
                isLoggedIn = true;
                role = data.role;
                console.log("I am inside this");
            }
        })
    }
    else {
        isLoggedIn = false;
    }
    console.log("Navbar appState", appState);
    return (
        <>
            <Router>
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/register">Register</Link>
                {isLoggedIn && role == "admin" ? <Link className="link" to="/product">Product</Link> : ""}
                {isLoggedIn ? <Link className="link" to="/product">Logout</Link> : ""}
                <Routes>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/product" element={<Product></Product>}></Route>
                    <Route path="/admin" element={<AdminDashboard></AdminDashboard>}></Route>
                    <Route path="/customer" element={<CustomerDashboard></CustomerDashboard>}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default Navbar;
