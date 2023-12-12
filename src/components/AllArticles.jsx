import { useEffect, useState } from "react";
import { getAllArticles } from "../utils";
import ArticleCard from "./ArticleCard";

const AllArticles = () => {
  const [allArticles, setAllArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllArticles().then(({ articles }) => {
      setAllArticles(articles);
      setIsLoading(true);
    });
  }, []);

  return (
    <>
      <h3>A list of all articles</h3>
      {isLoading ? (
        <div className="all_articles">
          {allArticles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </div>
      ) : (
        <h3>Loading all articles...</h3>
      )}
    </>
  );
};

export default AllArticles;
