import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../utils";

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

  return (
    <>
      {isLoading ? (
        <h3>Loding the article... </h3>
      ) : (
        <>
          <div className="article_container">
            <h3>Title: {article.title}</h3>
            <div>Topic: {article.topic}</div>
            <div>{article.body}</div>
            <div>Author: {article.author}</div>
            <div>Votes: {article.votes}</div>
            <div>Created at: {article.created_at}</div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleArticle;
