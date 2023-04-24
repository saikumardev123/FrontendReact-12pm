import axios from 'axios';
import React from 'react';
function Cart() {
    const forceUpdate = React.useState({})[1].bind(null, {})
    var cart = JSON.parse(localStorage.getItem("cart"));
    const removeProduct = (productId) => {
        alert("remove");
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems.forEach((item, i) => {
            if (item.id == productId) {
                cartItems.splice(i, 1);
                alert("product removed successfully!");
                forceUpdate();
            }
        })
        localStorage.setItem('cart', JSON.stringify(cartItems));

    }
    const renderItems = () => {
        if (cart.length == 0) {
            return <div>0 Items in the cart</div>
        }
        let list = cart.map(product => {
            return <tr>
                <td className="col-md-6">
                    <div className="media">
                        <a className="thumbnail pull-left" href="#"> <img className="media-object" src={product.imageUrl} style={{ width: "72px", height: "72px" }} /> </a>
                        <div className="media-body">
                            <h4 className="media-heading">{product.name}</h4>
                        </div>
                    </div></td>
                <td className="col-md-1" style={{ textAlign: "center" }}>
                    <input type="email" className="form-control" id="exampleInputEmail1" value="2" />
                </td>
                <td className="col-md-1 text-center"><strong>${product.price}</strong></td>
                <td className="col-md-1">
                    <button type="button" className="btn btn-danger" onClick={() => removeProduct(product.id)}>
                        <span className="glyphicon glyphicon-remove" ></span> Remove
    </button></td>
            </tr>
        })
        return list;
    }
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        //  const result = await axios.get("http://localhost:9091/payment");

        // if (!result) {
        //     alert("Server error. Are you online?");
        //     return;
        // }

        //   const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_hkegSGSTXFaiIX", // Enter the Key ID generated from the Dashboard
            amount: 2000,
            currency: "INR",
            name: "Soumya Corp.",
            description: "Test Transaction",
            order_id: "skjdbvkjsdcjk",
            handler: async function (response) {
                const data = {
                    orderCreationId: options.order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };
                const result = await axios.post("http://localhost:9091/payment/createOrderId/200", data);
                alert(result.data.msg);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }


    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-md-offset-1">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Total</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderItems()}
                                <br></br>
                                <center><tr>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={displayRazorpay}>
                                            Checkout <span className="glyphicon glyphicon-play"></span>
                                        </button></td>
                                </tr></center>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Cart;