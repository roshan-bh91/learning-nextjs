import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href={"/users"}>Users Page</Link>
      <div>
        <Link href={'/posts'}>Posts Page</Link>
      </div>
    </>
  );
};

export default HomePage;
