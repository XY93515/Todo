import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoApp from './TodoApp'; // Updated import

import Register from './pages/Auth/Register';
import store from './redux/store';
import Login from './pages/Auth/Login';
import { AuthProvider } from './context/auth';


ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<TodoApp />} />
      </Routes>
    </Router>
    </AuthProvider>
  </Provider>,
  document.getElementById('root')
);
