import { comments } from "@/data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find(({ id }) => id === parseInt(commentId));
  if (req.method === "GET") {
    res.status(200).json(comment);
  } else if (req.method === "POST") {
    const currentIndex = comments.findIndex(({ id }) => id === comment.id);
    const commentText = JSON.parse(req.body);
    const new_comment = { id: parseInt(commentId), text: commentText.text };

    comments.splice(currentIndex, 1, new_comment);
    res.status(200).json(new_comment);
  } else if (req.method === "DELETE") {
    const currentIndex = comments.findIndex(({ id }) => id === comment.id);

    comments.splice(currentIndex, 1);
    res.status(200).json(comment);
  }
}
