import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Details of concerned product</h1>
      <p>Here is the product id: {productId}</p>
    </div>
  );
};

export default ProductDetails;
