import { useRouter } from "next/router";

const ProductReviewDetails = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <h4>
      Here is the review {reviewId} for product {productId}
    </h4>
  );
};

export default ProductReviewDetails;
