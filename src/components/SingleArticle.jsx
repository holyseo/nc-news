import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllArticles } from "../utils";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <>
      {articles.map((article) => {
        if (article.article_id === +article_id) {
          return (
            <div className="article_container">
              <h3> Article #{article_id}</h3>
              <div>Title: {article.title}</div>
              <div>Author: {article.author}</div>
              <div>Votes: {article.votes}</div>
              <div>Created at: {article.created_at}</div>
            </div>
          );
        } else null;
      })}
    </>
  );
};

export default SingleArticle;
