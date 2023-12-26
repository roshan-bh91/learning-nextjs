import { useRouter } from "next/router";

const PostDetails = ({ postData }) => {
  console.log({ postData });
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
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
  console.log(`Generating details for post ${params.postId}`);
  if (!jsonFormattedData?.id) {
    return { notFound: true };
  }
  return {
    props: {
      postData: jsonFormattedData,
    },
  };
}

export async function getStaticPaths() {
  const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonFormattedData = await apiResponse.json();
  const paths = jsonFormattedData
    .slice(0, 3)
    .map(({ id }) => ({ params: { postId: `${id}` } }));
  return {
    // paths: [
    //   {
    //     params: {
    //       postId: "1",
    //     },
    //   },
    //   {
    //     params: {
    //       postId: "2",
    //     },
    //   },
    //   {
    //     params: {
    //       postId: "3",
    //     },
    //   },
    //   {
    //     params: {
    //       postId: "4",
    //     },
    //   },
    // ],
    paths,
    // fallback:false,
    fallback: true,
  };
}
