import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header';
import TodoList from './components/TodoList';

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
      <TodoList titleClicked={titleClicked}/>
    </div>
  );
}

export default App;
