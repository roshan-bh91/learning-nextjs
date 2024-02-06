import { useRouter } from "next/router";
import useSwr from "swr";

const IndividualCommentPage = () => {
  const router = useRouter();
  const { commentId } = router.query;
  const fetcherFunction = async () => {
    const response = await fetch(`/api/comments/${commentId}`);
    const data = await response.json();
    return data;
  };

  const { isLoading, data } = useSwr(
    commentId ? "comment-data" : null,
    fetcherFunction
  );
  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <h1>Comment details page</h1>
      <p>Comment Id : {data?.id}</p>
      <p>Comment Details: {data?.text}</p>
    </div>
  );
};

export default IndividualCommentPage;
