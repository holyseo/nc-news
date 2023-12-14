import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get(`https://news-api-5rlq.onrender.com/api/articles`)
    .then((res) => {
      return res.data;
    });
};

export const getArticleById = (id) => {
  return axios
    .get(`https://news-api-5rlq.onrender.com/api/articles/${id}`)
    .then((res) => {
      return res.data;
    });
};

export const getCommentsByArticleId = (id) => {
  return axios
    .get(`https://news-api-5rlq.onrender.com/api/articles/${id}/comments`)
    .then((res) => {
      return res.data;
    });
};

export const increaseVoteById = (id, vote) => {
  return axios
    .patch(`https://news-api-5rlq.onrender.com/api/articles/${id}`, {
      inc_votes: +1,
    })
    .then((res) => {
      return res.data.vote;
    })
    .catch((err) => {
      return err.message;
    });
};

export const decreaseVoteById = (id, vote) => {
  return axios
    .patch(`https://news-api-5rlq.onrender.com/api/articles/${id}`, {
      inc_votes: -1,
    })
    .then((res) => {
      return res.data.vote;
    })
    .catch((err) => {
      return err.message;
    });
};

export const deleteCommentById = (id) => {
  return axios
    .delete(`https://news-api-5rlq.onrender.com/api/comments/${id}`)
    .then((res) => {
      return res;
    });
};
