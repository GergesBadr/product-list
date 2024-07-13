import products from "../../data/products";
import ProductItem from "./ProductItem";

function ProductsList() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Desserts</h1>

      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
}

export default ProductsList;
