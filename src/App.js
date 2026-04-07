import './App.css';
import { Component } from 'react';
import { TodoList } from './components/TodoList';
import { TodoEditor } from './components/TodoEditor';
import { InfoTodo } from './components/InfoTodo';
import { FilterTodo } from './components/FilterTodo';
import tasks from "./data/todo.json";

class App extends Component {
  state = {
    todos: tasks,
    filter: "",
  };

  addTodo = (text) => {
    const todo = {
      id: Date.now().toString(),
      text,
      completed: false
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos]
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(t => t.id !== id)
    }));
  };

  toggleTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map(t => t.id === id ? {...t, completed: !t.completed} : t
      )}));
  };

  getTotal = () => {
    return this.state.todos.length
  };

  getCompleted = () => {
    // let sum = 0;
    // this.state.todos.map(t => t.completed === true ? sum += 1 : "");
    // return sum;
    return (this.state.todos.filter(t => t.completed === true)).length;
  };

  getFilterTodo = () => {
    const { todos, filter } = this.state
    return todos.filter(t => t.text.toLowerCase().includes(filter.toLocaleLowerCase()))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.target.value })
  };

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <TodoEditor onAdd={this.addTodo} />
        <TodoList onDelete={this.deleteTodo} toggleTodo={this.toggleTodo} todos={this.getFilterTodo()} />
        <InfoTodo total={this.getTotal()} completed={this.getCompleted()} />
        <FilterTodo value={this.state.filter} onChange={this.changeFilter}/>
      </div>
    );
  }
}

export default App;