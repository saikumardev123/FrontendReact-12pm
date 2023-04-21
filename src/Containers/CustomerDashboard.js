
import { useState, useEffect } from 'react';
import axios from 'axios';
function CustomerDashboard() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const displayProducts = () => {
        let list = products.map(product => {
            return <tr key={product.name}> <td>{product.id} </td> <td><img style={{ width: "60px", height: "64px" }} src={product.imageUrl}></img></td> <td>{product.name}</td> <td>{product.price}</td> </tr>
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
            <h1>Customer Dashboard</h1>
            <table border="1" style={{ width: "100%" }}>
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

            </table>
        </div>
    )
}
export default CustomerDashboard;