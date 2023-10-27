import { useState } from "react";
import "./App.css";
import AuthPage from "./Component/Auth/AuthPage";
import BlogPage from "./Component/Blog/BlogPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthPage />
      <BlogPage />
    </>
  );
}

export default App;
