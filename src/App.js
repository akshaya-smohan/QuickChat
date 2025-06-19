import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/login';
import Main from './components/Main';

function App() {
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
