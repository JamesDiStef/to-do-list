import { Routes, Route } from "react-router-dom";
import TodoPage from "./TodoPage";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/crazy" element={<Home />} />
    </Routes>
  );
}

export default App;
