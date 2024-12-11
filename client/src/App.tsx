import React, { CSSProperties } from 'react';
import Header from './components/header';
import { TEST_BG_COLOR, BG_COLOR, FONT_COLOR } from './styles.class.names';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Timeline from './components/timeline/Timeline';
import AuthPage from './components/auth/AuthPage';
import TestApi from './components/TestApi';

const style: CSSProperties = {
  minHeight: '100vh',
  // backgroundColor: TEST_BG_COLOR,
  background: BG_COLOR,
  color: FONT_COLOR
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
  },
  {
    path: '/timeline',
    element: <Timeline />
  },
  {
    path: "/test-api",
    element: <TestApi />
  }
])

const App = () => {
  return (
    <div className='flex-column h-100-l' style={style} >
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
