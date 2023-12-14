import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils";
import { useParams } from "react-router";
import CommentCard from "./CommentCard.jsx";

const CommentList = ({ toggleRefresh }) => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchComments();
  }, [toggleRefresh]);

  return isLoading ? (
    <h3>Loading comments...</h3>
  ) : (
    <CommentCard
      comments={comments}
      id={article_id}
      toggleRefresh={toggleRefresh}
    />
  );
};

export default CommentList;
