
import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
function TodoApp() {
  return (
    <div>
      <Navbar/>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default TodoApp;
