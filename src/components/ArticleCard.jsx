import { Link } from "react-router-dom";

const ArticleCard = ({ article, topic }) => {
  const createdDate = new Date(article.created_at);
  const formattedDate = createdDate.toLocaleDateString("en-GB");

  return (
    <div className="article_cards">
      <div className="article_header">
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </div>
      <div className="article_details">
        <div>
          <img className="article_img" src={article.article_img_url} />
        </div>
        <div>
          <div>Topic: {article.topic}</div>
          <div>Written by {article.author}</div>
          <div>Created at {formattedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
