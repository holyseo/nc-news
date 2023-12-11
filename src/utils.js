import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get(`https://news-api-5rlq.onrender.com/api/articles`)
    .then((res) => {
      return res.data;
    });
};
