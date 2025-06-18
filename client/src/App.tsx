import AuthPage from './components/auth/AuthPage';
import AuthProvider from './components/auth/AuthProvider';
import AuthedRoute from './components/auth/AuthedRoute';
import TestApi from './components/TestApi';
import TimelinePage from './components/timeline/TimelinePage';
import LeftoversPage from './components/leftovers/LeftoversPage';
import DashboardPage from './components/dashboard/DashboardPage';
import HouseholdsPage from './components/households/HouseholdsPage';
import { Route, Routes } from 'react-router';
import Col from './components/flex/Col';

const App = () => {
  return (
    <Col
      className='min-w-screen min-h-screen max-w-screen max-h-screen bg-background text-primary items-center'
    >
      <AuthProvider>
        <Routes>
          <Route index element={<AuthedRoute><DashboardPage /></AuthedRoute>} />
          <Route path={'/dashboard'} element={<AuthedRoute><DashboardPage /></AuthedRoute>} />
          <Route path={'/timeline'} element={<AuthedRoute><TimelinePage /></AuthedRoute>} />
          <Route path={'/login'} element={<AuthPage to={'/dashboard'} />} />
          <Route path={'/testApi'} element={<AuthedRoute><TestApi /></AuthedRoute>} />
          <Route path={'/leftovers'} element={<AuthedRoute><LeftoversPage /></AuthedRoute>} />
          <Route path={'/households'} element={<AuthedRoute><HouseholdsPage /></AuthedRoute>} />
        </Routes>
      </AuthProvider>
    </Col>
  );
}

export default App;
