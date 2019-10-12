import React from 'react';
import HomeMenu from '@components/HomeMenu'
import homeMenuConfig from '@components/HomeMenu/config.js'
import { getRoutes } from './routes'
import routes from './routes/config'
import './App.less';

function App() {
  return (
    <div className="app">
      <HomeMenu config={homeMenuConfig} />
      {getRoutes(routes)}
    </div>
  );
}

export default App;
