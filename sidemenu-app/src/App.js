import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import AppLayout from './components/Layout/AppLayout';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <MainPage />
      </AppLayout>
    </div>
  );
}

export default App;
