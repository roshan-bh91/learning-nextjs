const ProductsList = ({ products = [] }) => {
  return (
    <div>
      <h3>Products Listing Page</h3>
      <ul>
        {products?.map(({ id, title, price }) => {
          return (
            <li key={id}>
              {title}: $ {price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;

export async function getStaticProps() {
  const productsApiResponse = await fetch("http://localhost:4000/products");
  const jsonFormattedData = await productsApiResponse.json();
  return {
    props: {
      products: jsonFormattedData,
    },
  };
}
