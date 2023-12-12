import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="article_cards">
      <Link to={`/articles/${article.article_id}/comments`}>
        <h4>{article.title}</h4>
      </Link>
      <p>Topic = {article.topic}</p>
      <p>Author = {article.author}</p>
      <p>Created at = {article.created_at}</p>
    </div>
  );
};

export default ArticleCard;
