import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SkeletonLoader from "../components/SkeletonLoader";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <SkeletonLoader />;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="row">
      <div className="col-md-5">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: "400px", objectFit: "contain" }}
        />
      </div>
      <div className="col-md-7">
        <h2>{product.title}</h2>
        <p className="fw-bold">${product.price}</p>
        <p>{product.description}</p>
        <p className="text-muted">Category: {product.category}</p>
        <p>
          <strong>Rating:</strong> {product.rating.rate} ({product.rating.count}{" "}
          reviews)
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
