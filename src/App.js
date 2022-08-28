import { Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
import './App.css';
import IndexLayout from "./components/IndexLayout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodoList from "./pages/TodoList";
import { AuthContext } from "./components/Context";

function App() {
  const [token, setToken] = useState(null);
  const [nickname, setNickname] = useState({});
  const authContextValue = {
    token, setToken,
    nickname, setNickname
  };

  return (
    <div className="App">
      <AuthContext.Provider value={authContextValue}>
        <Outlet />
        <Routes>
          <Route path="/" element={<IndexLayout />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
