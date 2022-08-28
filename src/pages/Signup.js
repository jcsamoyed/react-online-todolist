import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { apiUserSignUp } from '@/utils/api';

const MySwal = withReactContent(Swal)

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const user = { user: data }
    apiUserSignUp(user).then(res => {
      MySwal.fire({
        title: res.data.message,
        timer: 2000,
        timerProgressBar: true,
      }).then(() => {
        navigate('/');
      })
    }).catch(err => {
      MySwal.fire({
        title: err.error,
        timer: 2000,
        timerProgressBar: true,
      })
    })
  }

  return (
    <div className="w-full md:w-6/12">
      <h1 className="text-xl lg:text-2xl font-bold">註冊帳號</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <label className="block text-sm font-bold mb-4">Email
          <input {...register("email", {
            required: { value: true, message: "此欄位不可為空" },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "請輸入正確的 Email"
            }
          })}
            className="block w-full my-1 px-4 py-3 text-base font-medium rounded"
            placeholder="請輸入Email" />
          <p className="text-red">{errors.email?.message}</p>
        </label>
        <label className="block text-sm font-bold mb-4">您的暱稱
          <input {...register("nickname", {
            required: { value: true, message: "此欄位不可為空" },
          })}
            className="block w-full my-1 px-4 py-3 text-base font-medium rounded"
            placeholder="請輸入您的暱稱" />
          <p className="text-red">{errors.nickname?.message}</p>
        </label>
        <label className="block text-sm font-bold mb-4">密碼
          <input {...register("password", {
            required: { value: true, message: "此欄位不可為空" },
          })}
            className="block w-full my-1 px-4 py-3 text-base font-medium rounded"
            placeholder="請輸入密碼"
            type="password" />
          <p className="text-red">{errors.password?.message}</p>
        </label>
        <label className="block text-sm font-bold">再次輸入密碼
          <input {...register("password", {
            required: { value: true, message: "此欄位不可為空" },
          })}
            className="block w-full my-1 px-4 py-3 text-base font-medium rounded"
            placeholder="請再次輸入密碼"
            type="password" />
          <p className="text-red">{errors.password?.message}</p>
        </label>
        <button type="submit" className="block bg-black text-white py-3 px-12 rounded mx-auto mt-6">註冊帳號</button>
      </form>
      <Link to="/" className="block text-center font-bold mt-6">登入</Link>
    </div>
  )
}

export default Signup;