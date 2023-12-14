import { useEffect, useState } from "react";
import { deleteCommentById, getCommentsByArticleId } from "../utils";

const CommentCard = ({ comments, id, toggleRefresh }) => {
  const [updatedComments, setUpdatedComments] = useState(comments);
  const [confirmMsg, setConfirmMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [deleteRefresh, setDeleteRefresh] = useState(false);

  const fetchComments = () => {
    getCommentsByArticleId(id).then(({ comments }) => {
      setUpdatedComments(comments);
    });
  };

  useEffect(() => {
    fetchComments();
  }, [deleteRefresh]);

  useEffect(() => {
    fetchComments();
  }, [toggleRefresh]);

  const handleClickDelete = (event) => {
    setIsDisabled(true);
    setConfirmMsg("");
    deleteCommentById(event.target.value).then((deleted) => {
      setConfirmMsg("Comment deleted successfully.");
      setTimeout(() => {
        setConfirmMsg("");
      }, 2000);
      setDeleteRefresh((pre) => !pre);
      setIsDisabled(false);
    });
    setConfirmMsg("");
  };

  return (
    <div>
      <div className="input_msg">{confirmMsg}</div>
      {updatedComments.map((comment) => (
        <div className="comment_item" key={comment.comment_id}>
          <span>{comment.body}</span>
          <span>
            <button
              onClick={handleClickDelete}
              value={comment.comment_id}
              disabled={isDisabled ? true : false}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};
export default CommentCard;
