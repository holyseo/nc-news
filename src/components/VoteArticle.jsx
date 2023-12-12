import { useState } from "react";
import { increaseVoteById, decreaseVoteById } from "../utils";

const VoteArticle = ({ article }) => {
  const [vote, setVote] = useState(article.votes);
  const [isLoading, setIsLoading] = useState(false);

  const handleVoteIncrement = () => {
    setIsLoading(true);
    increaseVoteById(article.article_id, vote).then((voteCount) => {
      setVote(voteCount);
      setIsLoading(false);
    });
  };
  const handleVoteDecrement = () => {
    setIsLoading(true);
    decreaseVoteById(article.article_id, vote).then((voteCount) => {
      setVote(voteCount);
      setIsLoading(false);
    });
  };
  return (
    <div className="article_item">
      <span className="vote_count">{isLoading ? "Loading..." : vote}</span>
      <button className="btn_vote" onClick={handleVoteIncrement}>
        👍🏻
      </button>
      <button className="btn_vote" onClick={handleVoteDecrement}>
        👎🏻
      </button>
    </div>
  );
};

export default VoteArticle;
