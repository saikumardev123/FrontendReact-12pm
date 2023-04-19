
import { useState, useEffect } from 'react';
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

    const [products, setProducts] = useState([]);
    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setProduct({ ...product, [name]: value });
    }

    useEffect(() => {

        axios.get("http://localhost:9091/product/list").then(
            response => {
                console.log("response", response)
            },
            error => {
                console.log(error);
            }
        )
    }, [])
    const addProduct = (event) => {
        event.preventDefault();
        console.log(product);
        axios.post("http://localhost:9091/product/add", product).then(
            response => {
                console.log("response", response)
            },
            error => {
                console.log(error);
            }
        )
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Add Product</h1>
            <form style={{ textAlign: 'center' }}>
                <input onChange={updateState} type="text" name="name" placeholder="product name"></input> <br></br><br></br>
                <input onChange={updateState} type="number" name="price" placeholder="price"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="description" placeholder="description here"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="imageUrl" placeholder="imageurl here"></input><br></br><br></br>
                <input onChange={updateState} type="number" name="quantity" placeholder="quantity here"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="seller" placeholder="seller here"></input><br></br><br></br>
                <button onClick={addProduct}>Add Product</button>
            </form>
        </div>
    )

}
export default Product;
