import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils";
import { useParams } from "react-router";
import CommentCard from "./CommentCard.jsx";

const CommentList = (updateComments) => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [updateComments]);
  return isLoading ? (
    <h3>Loading comments...</h3>
  ) : (
    <CommentCard comments={comments} />
  );
};

export default CommentList;
