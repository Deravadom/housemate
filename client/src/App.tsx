import React, { CSSProperties } from 'react';
import Header from './components/header';
import { TEST_BG_COLOR } from './styles.class.names';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Timeline from './components/timeline/Timeline';

const style: CSSProperties = {
  minHeight: '100vh',
  backgroundColor: TEST_BG_COLOR,
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Timeline />,
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
