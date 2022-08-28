import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="md:w-6/12">
      <h1 className="text-xl lg:text-2xl	font-bold">最實用的線上代辦事項服務</h1>
      <Link to="/signup">註冊帳號</Link>
    </div>
  )
}

export default Login;