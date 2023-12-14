const CommentCard = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <div className="comment_item" key={comment.comment_id}>
        <span>{comment.body}</span>
        <span>
          <button>Delete</button>
        </span>
      </div>
    );
  });
};
export default CommentCard;
