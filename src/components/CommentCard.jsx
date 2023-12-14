import { useEffect, useState } from "react";
import { deleteCommentById, getCommentsByArticleId } from "../utils";

const CommentCard = ({ comments, id }) => {
  const [updatedComments, setUpdatedComments] = useState(comments);
  const [confirmMsg, setConfirmMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [toggleRefresh, setToggleRefresh] = useState(false);

  const fetchComments = () => {
    getCommentsByArticleId(id).then(({ comments }) => {
      setUpdatedComments(comments);
    });
  };

  useEffect(() => {
    fetchComments();
  }, [toggleRefresh]);

  const handleClickDelete = (event) => {
    setConfirmMsg("");
    setIsDisabled(true);
    deleteCommentById(event.target.value).then((deleted) => {
      setConfirmMsg("Comment deleted successfully.");
      setToggleRefresh((pre) => !pre);
    });
    setIsDisabled(false);
  };

  return (
    <div>
      <div>{confirmMsg}</div>
      {updatedComments.map((comment) => (
        <div className="comment_item" key={comment.comment_id}>
          <span>{comment.body}</span>
          <span>
            <button
              onClick={handleClickDelete}
              value={comment.comment_id}
              disabled={isDisabled}
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
