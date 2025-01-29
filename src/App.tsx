import { Routes, Route } from "react-router-dom";
import TodoPage from "./TodoPage";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crazy" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
