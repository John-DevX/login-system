import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/themeContext';
const Dashboard = () => {
const navigate = useNavigate();
const logout = () => {
  localStorage.removeItem('token');
  navigate('/');
}
  return (
    <div className='text-center mt-2'>
      <h1 className='font-bold text-xl'>Dashboard</h1>
     <button
     onClick={logout}
     className='border bg-indigo-500'>Logout</button>
    </div>
  )
}

export default Dashboard;
