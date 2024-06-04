import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { BlogsPage } from "./pages/Blogs";
import { PostOne } from "./pages/Post-one";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route
          path="/blogs/from-patna-to-the-global-tech"
          element={<PostOne />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
