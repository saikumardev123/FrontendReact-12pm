
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
function Product() {
    const [product, setProduct] = useState({
        "name": "",
        "price": 0,
        "description": "",
        "imageUrl": "",
        "quantity": 0,
        "seller": ""

    })

    var formRef = React.useRef();

    const [products, setProducts] = useState([]);

    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setProduct({ ...product, [name]: value });
    }

    useEffect(() => {
        getProducts();
    }, [])
    const addProduct = (event) => {
        event.preventDefault();
        console.log(product);
        axios.post("http://localhost:9091/product/add", product).then(
            response => {
                console.log("response", response);
                formRef.current.reset();
                getProducts();

            },
            error => {
                console.log(error);
            }
        )
    }
    const displayProducts = () => {
        let list = products.map(product => {
            return <tr key={product.name}> <td>{product.id} </td> <td><img style={{ width: "60px", height: "64px" }} src={product.imageUrl}></img></td> <td>{product.name}</td> <td>{product.price}</td> <td><button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button></td><td><button className="btn btn-warning" onClick={() => editProduct(product.id)}>Edit</button></td> </tr>
        })
        return list;
    }

    const editProduct = (productId) => {

    }

    const deleteProduct = (prodId) => {
        axios.delete("http://localhost:9091/product/delete", { data: { "id": prodId } }).then(
            response => {
                console.log(response);
                getProducts();
            },
            error => {
                console.log(error);
            }
        )
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
            <h1 style={{ textAlign: 'center' }}>Add Product</h1>

            <div class="container mt-3">
                <form ref={formRef}>
                    <div className="row">
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="enter product name" name="name" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="number" className="form-control" placeholder="Enter price" name="price" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter Description" name="description" />
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter Image URL" name="imageUrl" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="number" className="form-control" placeholder="Enter quantity" name="quantity" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter Seller" name="seller" />
                        </div>
                    </div>
                    <br></br><br></br>
                    <center><button onClick={addProduct} className="btn btn-primary">Add Product</button></center>
                </form>
            </div>


            <hr></hr>

            <div class="container mt-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th colSpan="2">Operation</th> </tr>
                    </thead>

                    <tbody>
                        {displayProducts()}
                    </tbody>

                </table>
            </div>

        </div>
    )

}
export default Product;
