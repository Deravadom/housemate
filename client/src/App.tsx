import React from 'react';
import Header from './components/header';
import { FONT_COLOR, BG_COLOR } from './styles.class.names';

const App = () => {
  return (
    <div className={`flex ${FONT_COLOR} ${BG_COLOR} w-100`}>
      <Header />
    </div>
  );
}

export default App;
