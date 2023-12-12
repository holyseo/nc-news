import { Routes, Route } from "react-router";
import "./App.css";
import AllArticles from "./components/AllArticles";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
