import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href={"/users"}>Users Page</Link>
    </>
  );
};

export default HomePage;
