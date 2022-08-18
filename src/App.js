import './App.css';
import { useState, useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './components/header';
import About from './pages/About';
import Contact from './pages/Contact';
import Dev from './pages/Dev';
import Todo from './pages/Todo';
import Users from './pages/Users';


function App() {
  const [title, updateTitle] = useState('TODO App')

  useEffect(() => {
    console.log('title changes')
  }, [title])

  const titleClicked = (params) => {
    updateTitle(params);
  }

  return (
    <div className="App">
      <Header title={title} />
      {/* <TodoList titleClicked={titleClicked}/> */}
        <Routes>
          <Route exact path="todo" element={<Todo />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dev" element={<Dev />} />
          <Route path="users" element={<Users />} />
        </Routes>
    </div>
  );
}

export default App;
