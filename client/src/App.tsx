import { CSSProperties } from 'react';
import { BG_COLOR, FONT_COLOR } from './styles.class.names';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './components/auth/AuthPage';
import AuthProvider from './components/auth/AuthProvider';
import AuthedRoute from './components/auth/AuthedRoute';
import TestApi from './components/TestApi';
import TimelinePage from './components/timeline/TimelinePage';
import Header from './components/header';
import routes from './routes';
import LeftoversPage from './components/leftovers/LeftoversPage';

const style: CSSProperties = {
  minHeight: '100vh',
  // backgroundColor: TEST_BG_COLOR,
  background: BG_COLOR,
  color: FONT_COLOR
};

const App = () => {
  return (
    <div style={style} >
      <Header />
      <AuthProvider>
        <Routes>
          <Route path={routes.index} element={<AuthedRoute><TimelinePage /></AuthedRoute>} />
          <Route path={routes.timeline} element={<AuthedRoute><TimelinePage /></AuthedRoute>} />
          <Route path={routes.login} element={<AuthPage to={routes.timeline} />} />
          <Route path={routes.testApi} element={<AuthedRoute><TestApi /></AuthedRoute>} />
          <Route path={routes.leftovers} element={<AuthedRoute><LeftoversPage /></AuthedRoute>} />
        </Routes>
      </AuthProvider>
      <AuthProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
