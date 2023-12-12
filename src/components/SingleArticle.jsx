import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../utils";
import CommentList from "./CommentList";
import VoteArticle from "./VoteArticle";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  const createdDate = new Date(article.created_at);
  const formattedDate = createdDate.toLocaleDateString("en-GB");

  return (
    <>
      {isLoading ? (
        <h3>Loding the article... </h3>
      ) : (
        <>
          <div className="article_container">
            <h3>Title: {article.title}</h3>
            <div className="subheader">Topic: {article.topic}</div>
            <div className="subheader">{article.body}</div>
            <div className="subheader">Author: {article.author}</div>
            <div className="subheader">Created at: {formattedDate}</div>
            <VoteArticle article={article} />
          </div>
          <div className="comments_header">Comments</div>
          <div className="comments_container">
            <CommentList />
          </div>
        </>
      )}
    </>
  );
};

export default SingleArticle;
