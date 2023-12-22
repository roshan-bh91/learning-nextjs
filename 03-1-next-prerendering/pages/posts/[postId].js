const PostDetails = ({ postData }) => {
  console.log({ postData });
  return (
    <div>
      <h4>Post details: {postData.id}</h4>
      <h5>{postData.title}</h5>
      <span>{postData.body}</span>
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

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
      {
        params: {
          postId: "2",
        },
      },
      {
        params: {
          postId: "3",
        },
      },
      {
        params: {
          postId: "4",
        },
      },
    ],
    fallback: false,
  };
}
