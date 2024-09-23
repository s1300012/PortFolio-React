import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Hedder from "./compornent/common/Header";
import HomePage from "./compornent/page/HomePage";
import BlogPage from "./compornent/page/BlogPage";
import SnsPage from "./compornent/page/SnsPage";
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <Hedder />

        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sns" element={<SnsPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;