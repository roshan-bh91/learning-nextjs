import { comments } from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const newCommentData = {
      id: comments.length + 1,
      text: JSON.parse(req.body).comment,
    };
    comments.push(newCommentData);
    res.status(201).json(newCommentData);
  }
}
