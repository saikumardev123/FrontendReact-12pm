
import { useState, useEffect } from 'react';
import './Customer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CustomerDashboard() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const navigate = useNavigate();

    // const displayProducts = () => {
    //     let list = products.map(product => {
    //         return <tr key={product.name}> <td>{product.id} </td> <td><img style={{ width: "60px", height: "64px" }} src={product.imageUrl}></img></td> <td>{product.name}</td> <td>{product.price}</td> </tr>
    //     })
    //     return list;
    // }


    const displayProducts = () => {
        let list = products.map(product => {
            return <div key={product.id} className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">

                        <img style={{ cursor: "pointer" }} onClick={() => {
                            navigate("/product-view");
                            localStorage.setItem('currentProduct', JSON.stringify(product));
                        }} className="pic-1" src={product.imageUrl} style={{ width: "210px", height: "200px" }} />

                    </div>
                    <ul className="rating">
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                    </ul>
                    <div className="product-content">
                        <h3 className="title"><a href="#">{product.name.substring(0, 50)}</a></h3>
                        <div className="price">Rs.{product.price}
                        </div>
                        <a className="add-to-cart" href="">+ Add To Cart</a>
                    </div>
                </div>
            </div>
        })
        return list;
    }



    const getProducts = () => {
        axios.get("http://localhost:9091/product/list").then(
            response => {
                console.log("response.data", response.data);
                setProducts(response.data);
            },
            error => {
                console.log(error);
            }
        )
    }
    return (
        <div>
            {/* <table border="1" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>

                        <th>Price</th>
                    </tr>
                </thead>

                <tbody style={{ textAlign: "center" }}>
                    {displayProducts()}
                </tbody>

            </table> */}

            <div className="container">
                <h3 className="h3">All products</h3>
                <br></br>
                <div className="row">
                    {displayProducts()}
                </div>
            </div>
        </div >
    )
}
export default CustomerDashboard;