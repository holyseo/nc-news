const CommentCard = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <div className="comment_item" key={comment.comment_id}>
        {comment.body}
      </div>
    );
  });
};
export default CommentCard;
