import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import IndexLayout from "./components/IndexLayout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="App">
      <Outlet />
      <Routes>
        <Route path="/" element={<IndexLayout />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
