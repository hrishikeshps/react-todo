import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header';
// import TodoList from './components/TodoList';
import About from './pages/About';
import Contact from './pages/Contact';
import Dev from './pages/Dev';
import Todo from './pages/Todo';
import {
  Routes,
  Route
} from "react-router-dom";

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
          <Route exact path="/" element={<Todo />}>
          </Route>
          <Route path="about" element={<About />}>
          </Route>
          <Route path="contact" element={<Contact />}>
          </Route>
          <Route path="dev" element={<Dev />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
