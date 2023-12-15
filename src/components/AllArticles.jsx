import { useEffect, useState } from "react";
import { getAllArticles, getArticlesByTopic, getTopics } from "../utils";
import ArticleCard from "./ArticleCard";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [topicItem, setTopicItem] = useState("");
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  useEffect(() => {
    setArticles([]);
    getArticlesByTopic(topicItem).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topicItem]);

  const handleTopic = (event) => {
    setTopicItem(event.target.value);
  };

  return (
    <div className="articles_container">
      <div className="articles_menu">
        <div className="topic_list">
          <button className="topic" onClick={handleTopic} value="">
            View all articles
          </button>
          {topics.map((topic, index) => {
            return (
              <button
                key={index}
                className="topic"
                onClick={handleTopic}
                value={topic.slug}
              >
                {topic.slug}
              </button>
            );
          })}
        </div>
      </div>
      {isLoading ? (
        <h3>Loading all articles...</h3>
      ) : (
        <div className="all_articles">
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                article={article}
                topic={topicItem}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllArticles;
