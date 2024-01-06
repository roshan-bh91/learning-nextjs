import { useRouter } from "next/router";

const ProductDetailsPage = ({ productDetails }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h4>Loading...</h4>;
  }

  const { id, title, price, description } = productDetails;
  return (
    <div>
      <h4>Product Details page</h4>
      <p>Product Id:{id}</p>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default ProductDetailsPage;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { productId } = context.params;
  console.log("Generating product details page for " + productId);
  const productDetailsApiResponse = await fetch(
    `http://localhost:4000/products/${productId}`
  );
  const jsonFormattedData = await productDetailsApiResponse.json();
  if (!jsonFormattedData.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      productDetails: jsonFormattedData,
    },
    revalidate: 20,
  };
}
