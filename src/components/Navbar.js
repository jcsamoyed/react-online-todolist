import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AuthContext } from './Context';
import { apiUserSignOut } from '@/utils/api'

const MySwal = withReactContent(Swal)

function Navbar() {
  const { setToken, nickname, setNickname } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    apiUserSignOut().then((res) => {
      MySwal.fire({
        title: res.data.message,
        timer: 1000,
        timerProgressBar: true,
      }).then(() => {
        sessionStorage.removeItem('token');
        setToken('');
        setNickname('');
        navigate('/');
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <nav className="flex justify-between items-center pt-4 gap-10">
      <img className="shrink max-w-[240px] sm:max-w-full" src={require('@/assets/images/logo.png')} alt="logo" />
      <ul className="sm:grid sm:grid-cols-2 sm:gap-6 shrink-0">
        <li className="font-bold hidden sm:block">{nickname}的代辦</li>
        <li className="cursor-pointer" onClick={handleSignOut}>登出</li>
      </ul>
    </nav>
  )
}

export default Navbar;