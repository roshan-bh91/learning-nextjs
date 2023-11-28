import Link from "next/link";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();

  const buttonClickHandler = () => {
    console.log("Products viewing now");
    router.push("/products");
    // router.replace("/products");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <h4>Links</h4>
      <ul>
        <li>
          <Link href="/products">Products Page</Link>
        </li>
        <li>
          <Link href="/blog">Blog Page</Link>
        </li>
      </ul>
      <button onClick={buttonClickHandler}>View Products</button>
    </div>
  );
};

export default Home;
