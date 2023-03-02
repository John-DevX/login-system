import { useNavigate } from 'react-router-dom';
import Button from '../Button';
const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    return navigate('/');
  }
  return (
    <div className='text-center mt-2 md:w-80 mx-auto p-2 relative'>
      <h1 className='font-bold text-xl'>Dashboard</h1>
      <Button
        clickEvent={logout}
        text='Logout'
      />
    </div>
  )
}

export default Dashboard;
