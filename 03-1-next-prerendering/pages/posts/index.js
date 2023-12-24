import Link from "next/link";

const PostList = ({ postsList }) => {
  return (
    <div>
      <h4>List of Posts</h4>
      <ol>
        {postsList.map(({ id, title }) => (
          <li key={id}>
            {id}.<Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default PostList;

export async function getStaticProps() {
  const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonFormattedData = await apiResponse.json();
  return {
    props: {
      postsList: jsonFormattedData.slice(0,3),
    },
  };
}
