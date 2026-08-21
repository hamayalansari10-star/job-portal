import { useAuth } from '../context/AuthContext';
import SeekerDashboard from './SeekerDashboard';
import EmployerDashboard from './EmployerDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  return user.role === 'employer' ? <EmployerDashboard /> : <SeekerDashboard />;
};

export default Dashboard;