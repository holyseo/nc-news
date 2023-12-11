import { useEffect, useState } from "react";
import { getAllArticles } from "../utils";
import ArticleCard from "./ArticleCard";

const AllArticles = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then(({ articles }) => {
      setAllArticles(articles);
    });
  }, []);

  return (
    <>
      <h3>A list of all articles</h3>
      <div className="all_articles">
        {allArticles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </>
  );
};

export default AllArticles;
