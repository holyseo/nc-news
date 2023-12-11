const ArticleCard = ({ article }) => {
  return (
    <div className="article_cards">
      <h4>{article.title}</h4>
      <p>Topic = {article.topic}</p>
      <p>Author = {article.author}</p>
      <p>Created at = {article.created_at}</p>
    </div>
  );
};

export default ArticleCard;
