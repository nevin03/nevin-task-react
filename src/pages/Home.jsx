import useFetch from "../hooks/useFetch";
import SkeletonLoader from "../components/SkeletonLoader";
import ProductCard from "../components/ProductCard";
import { useQueryParams } from "../hooks/useQueryParams";

const Home = () => {
  const [params, setParam] = useQueryParams();

  const category = params.category || "";
  const search = params.search || "";

  const categoryUrl = `https://fakestoreapi.com/products/categories`;
  const productUrl = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : `https://fakestoreapi.com/products`;

  const { data: categories } = useFetch(categoryUrl);
  const { data: products, loading, error } = useFetch(productUrl);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setParam("category", e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={search}
            onChange={(e) => setParam("search", e.target.value)}
          />
        </div>
      </div>

      {loading && <SkeletonLoader />}
      {error && <p className="text-danger">{error}</p>}

      <div className="row g-4">
        {filtered.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
