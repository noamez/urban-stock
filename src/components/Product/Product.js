import "./Product.css";
function Product(props) {
  let product = props.product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} />
      </div>
      <div className="product-info">
        <h5>{product.title}</h5>
        <h6>{product.price}</h6>
      </div>
    </div>
  );
}
export default Product;
