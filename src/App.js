import {  Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/login';
import Main from './components/Main';
import { useEffect } from 'react';

function App() {

  const navigator= useNavigate()

  useEffect(()=> {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      navigator('/login')
    } else {
      navigator('/main')
    }
  }, [])

  return (
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path='main' element={<Main />} />
        </Routes>
      
  );
}

export default App;
