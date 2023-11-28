import Link from "next/link";
const BlogHome = () => {
  return (
    <div>
      <h1>Blogs home page</h1>
      <Link href="/">
        <p>Go Back to home</p>
      </Link>
    </div>
  );
};

export default BlogHome;
