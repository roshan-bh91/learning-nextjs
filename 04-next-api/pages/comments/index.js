import { useState } from "react";

const CommentsListingPage = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const commentsList = await response.json();
    setComments(commentsList);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment,
      }),
    });
    const data = await response.json();
    fetchComments();
  };
  return (
    <section>
      <h1>Comments Listing Page</h1>
      <button onClick={fetchComments}>Load Comments</button>
      <form onSubmit={onFormSubmit}>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter new comment details"
        />
        <button type="submit">Create New Comment</button>
      </form>
      {comments.map(({ id, text }) => (
        <div key={id}>
          {id} {text}
          <button>Delete Comment</button>
        </div>
      ))}
    </section>
  );
};

export default CommentsListingPage;
