import { useState } from "react";
import { increaseVoteById, decreaseVoteById } from "../utils";

const VoteArticle = ({ article }) => {
  const [vote, setVote] = useState(article.votes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVoteIncrement = () => {
    typeof vote !== "string"
      ? setVote((vote) => vote + 1)
      : setVote((vote) => +vote.replace(`Vote has been updated: `, "") + 1);
    increaseVoteById(article.article_id, vote)
      .then((voteCount) => {
        !voteCount
          ? (setError("problem with processing the counts.."),
            setVote((vote) => vote - 1))
          : (setError(" "), setVote(voteCount));
      })
      .catch((err) => setError(err));
  };
  const handleVoteDecrement = () => {
    typeof vote !== "string"
      ? setVote((vote) => vote - 1)
      : setVote((vote) => +vote.replace(`Vote has been updated: `, "") - 1);
    decreaseVoteById(article.article_id, vote)
      .then((voteCount) => {
        !voteCount
          ? (setError("problem with processing the counts.."),
            setVote((vote) => vote + 1))
          : (setError(" "), setVote(voteCount));
      })
      .catch((err) => setError(err));
  };
  return (
    <div className="article_item">
      <span className="vote_count">{isLoading ? "Loading..." : vote}</span>
      <span>{error ? error : setError(" ")}</span>
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
