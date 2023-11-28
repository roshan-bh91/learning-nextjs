import Link from "next/link";

const Home = () => {
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
    </div>
  );
};

export default Home;
