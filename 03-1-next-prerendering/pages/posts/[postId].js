const PostDetails = ({ postData }) => {
  console.log({ postData });
  return (
    <div>
      <h4>Post details</h4>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps(context) {
  const { params } = context;
  const postDetailsFromApi = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const jsonFormattedData = await postDetailsFromApi.json();
  return {
    props: {
      postData: jsonFormattedData,
    },
  };
}
