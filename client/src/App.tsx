import { CSSProperties } from 'react';
import { BG_COLOR, FONT_COLOR } from './styles.class.names';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './components/auth/AuthPage';
import AuthProvider from './components/auth/AuthProvider';
import AuthedRoute from './components/auth/AuthedRoute';
import TestApi from './components/TestApi';
import TimelinePage from './components/timeline/TimelinePage';
import Header from './components/Header';

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
          <Route path="/" element={<AuthedRoute><TimelinePage /></AuthedRoute>} />
          <Route path="/timeline" element={<AuthedRoute><TimelinePage /></AuthedRoute>} />
          <Route path="/login" element={<AuthPage to="timeline" />} />
          <Route path="/test-api" element={<AuthedRoute><TestApi /></AuthedRoute>} />
        </Routes>
      </AuthProvider>
      <AuthProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
