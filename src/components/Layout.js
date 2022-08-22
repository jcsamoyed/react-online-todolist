import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">首頁</NavLink>
        <NavLink to="/signup">註冊</NavLink>
        <NavLink to="/todo-list">待辦清單</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout;