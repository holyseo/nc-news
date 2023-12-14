import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById, postCommentById } from "../utils";
import CommentList from "./CommentList";
import VoteArticle from "./VoteArticle";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postComment, setPostComment] = useState("");
  const [inputError, setInputError] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [updateComments, setUpdateComments] = useState(false);

  const fetchArticle = () => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  const createdDate = new Date(article.created_at);
  const formattedDate = createdDate.toLocaleDateString("en-GB");

  const handleCommentPost = (event) => {
    setConfirmMsg("");
    setInputError("");
    setPostComment(event.target.value);
  };

  const handlePostButton = () => {
    if (postComment === "") {
      return setInputError("Please enter your comment.");
    }
    setIsDisabled(true);
    setConfirmMsg("");
    postCommentById(article_id, article.author, postComment).then((res) => {
      setIsLoading(false);
      setInputError("");
      setConfirmMsg("Comment added!");
      setIsDisabled(false);
      setUpdateComments(true);
    });
    setPostComment("");
    setUpdateComments(false);
  };

  return (
    <>
      {isLoading ? (
        <h3>Loding the article... </h3>
      ) : (
        <>
          <div className="article_container">
            <h3 className="subheader_title">Title: {article.title}</h3>
            <div className="subheader">{article.body}</div>
            <div className="subheader_container">
              <div className="subheader">
                <span className="small_header">Written by</span>
                {article.author}
              </div>
              <div className="subheader">
                <span className="small_header">Created at</span> {formattedDate}
              </div>
              <div className="subheader">
                <span className="small_header">Topic:</span> {article.topic}
              </div>
            </div>
            <VoteArticle article={article} />
          </div>
          <div className="comments_header">Comments</div>
          <div className="comment_post">
            <input
              type="text"
              placeholder="Type your comments"
              value={postComment}
              onChange={handleCommentPost}
              disabled={isDisabled ? true : false}
            />
            <button
              onClick={handlePostButton}
              disabled={isDisabled ? true : false}
            >
              Post
            </button>
          </div>

          <div className="comments_container">
            <div className="input_msg_warning">
              {postComment === "" ? inputError : null}
            </div>
            <div className="input_msg">{confirmMsg}</div>
            <CommentList updateComments={updateComments} />
          </div>
        </>
      )}
    </>
  );
};

export default SingleArticle;
