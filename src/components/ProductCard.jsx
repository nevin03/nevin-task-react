import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    console.log(`Added to cart: ${product.title}`);
  };

  const handleRemoveFromCart = () => {
    setInCart(false);
    console.log(`Removed from cart: ${product.title}`);
  };

  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>
        <p className="card-text fw-bold">${product.price}</p>
        <p className="text-muted small">{product.category}</p>

        <div className="mt-auto d-grid gap-2">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline-primary btn-sm"
          >
            View Details
          </Link>

          {inCart ? (
            <button
              className="btn btn-light btn-sm border d-flex align-items-center justify-content-center gap-2"
              onClick={handleRemoveFromCart}
            >
              <span
                className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <i className="bi bi-cart-x-fill"></i>
              </span>
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-light btn-sm border d-flex align-items-center justify-content-center gap-2"
              onClick={handleAddToCart}
            >
              <span
                className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <i className="bi bi-cart-check"></i>
              </span>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
