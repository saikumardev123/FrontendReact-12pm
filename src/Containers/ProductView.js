import './ProductView.css';
function ProductView() {
    const product = JSON.parse(localStorage.getItem("currentProduct"));
    console.log(product);
    const addToCart = () => {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem("cart", JSON.stringify([]));
        }
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Product Added to the Cart");
    }
    return (
        <div>

            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">

                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={product.imageUrl} /></div>
                                    <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{product.name}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                                <p className="product-description">{product.description}</p>
                                <h4 className="price">current price: <span>{product.price}</span></h4>
                                <div className="action">
                                    <button className="add-to-cart btn btn-default" onClick={addToCart}>add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ProductView;