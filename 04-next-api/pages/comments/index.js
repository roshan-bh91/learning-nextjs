import { useState } from "react";

const CommentsListingPage = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const commentsList = await response.json();
    setComments(commentsList);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (isEditable) {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: "POST",
        body: JSON.stringify({ text: comment }),
      });
      fetchComments();
    } else {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          comment,
        }),
      });
      const data = await response.json();
      fetchComments();
    }
  };

  const deleteComment = async (id) => {
    await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    fetchComments();
  };

  const updateComment = (id, currentText) => {
    setIsEditable(true);
    setComment(currentText);
    setCommentId(id);
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
          <button
            onClick={() => {
              deleteComment(id);
            }}
          >
            Delete Comment
          </button>
          <button
            onClick={() => {
              updateComment(id, text);
            }}
          >
            Update Comment
          </button>
        </div>
      ))}
    </section>
  );
};

export default CommentsListingPage;
