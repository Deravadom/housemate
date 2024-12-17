import { CSSProperties } from 'react';
import { BG_COLOR, FONT_COLOR } from './styles.class.names';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './components/auth/AuthPage';
import AuthProvider from './components/auth/AuthProvider';
import AuthedRoute from './components/auth/AuthedRoute';
import routes from './routes';
import TestApi from './components/TestApi';
import TimelinePage from './components/timeline/TimelinePage';
import LeftoversPage from './components/leftovers/LeftoversPage';
import DashboardPage from './components/dashboard/DashboardPage';
import Header from './components/header';

const style: CSSProperties = {
  minHeight: '100vh',
  // backgroundColor: TEST_BG_COLOR,
  background: BG_COLOR,
  color: FONT_COLOR
};

const App = () => {
  return (
    <div style={style} >
      <AuthProvider>
        <Routes>
          <Route path={routes.index} element={<AuthedRoute><TimelinePage /></AuthedRoute>} />
          <Route path={routes.dashboard} element={<AuthedRoute><DashboardPage /></AuthedRoute>} />
          <Route path={routes.timeline} element={<AuthedRoute><TimelinePage /></AuthedRoute>} />
          <Route path={routes.login} element={<AuthPage to={routes.dashboard} />} />
          <Route path={routes.testApi} element={<AuthedRoute><TestApi /></AuthedRoute>} />
          <Route path={routes.leftovers} element={<AuthedRoute><LeftoversPage /></AuthedRoute>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
