import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Diagram from './components/Diagram';
import Sidebar from './components/Sidebar';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Diagram />
      </div>
    </Provider>
  );
};

export default App;
