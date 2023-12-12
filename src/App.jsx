import { Routes, Route } from "react-router";
import "./App.css";
import AllArticles from "./components/AllArticles";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import CommentList from "./components/CommentList";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="/articles/:article_id/comments"
          element={<CommentList />}
        />
      </Routes>
    </div>
  );
}

export default App;
