import Link from "next/link";
const ProductListing = () => {
  return (
    <div>
      <h1>List of all products</h1>
      {[1, 2, 3, 100].map((productLink) => (
        <div key={productLink}>
          <Link href={`/products/${productLink}`}>Product {productLink}</Link>
        </div>
      ))}
      <Link href="/">
        <p>Go back to home</p>
      </Link>
    </div>
  );
};

export default ProductListing;
