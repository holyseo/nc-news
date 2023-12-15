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

export const postCommentById = (id, author, commentBody) => {
  return axios
    .post(`https://news-api-5rlq.onrender.com/api/articles/${id}/comments`, {
      author: author,
      body: commentBody,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const getTopics = () => {
  return axios
    .get(`https://news-api-5rlq.onrender.com/api/topics`)
    .then((res) => {
      return res.data;
    });
};

export const getArticlesByTopic = (topic) => {
  return axios
    .get(`https://news-api-5rlq.onrender.com/api/articles?topic=${topic}`)
    .then((res) => {
      return res.data;
    });
};
