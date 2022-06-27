import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Register from './components/Register'  
import TodoList from './components/Todolist';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Register/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/todolist' exact element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
