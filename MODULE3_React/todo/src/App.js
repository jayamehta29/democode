
import React, { Component } from 'react';
import InputBox from "./components/InputBox/InputBox.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";

class App extends Component {
  state = { 
    todos:[
      {id: "1" , todo : "abcd"},
      {id: "2" , todo : "qwr"},
      {id: "3" , todo : "dfg"},
      {id: "4" , todo : "nbvcxz"},
    ],
   };

   deleteTodo =(id)=>{
     let updatedTodos = this.state.todos.filter(function(todoObj){
        if(todoObj.id == id){
          return false;
        } 
        return true;
     });
     this.setState({
       todos: updatedTodos,
     });
   };

   addTodo = (todo) => {
    let updatedTodos = [...this.state.todos,{ id: this.state.todos.length + 1, todo: todo },];
    this.setState({
      todos:updatedTodos
    })
  };

  render() { 
    let todos = this.state.todos;
    let deleteTodo = this.deleteTodo;
    let addTodo = this.addTodo;
    return ( 
      <div className="App">
        <InputBox addTodo = {addTodo}></InputBox>
        <TodoList todos={todos} deleteTodo = {deleteTodo}></TodoList>
      </div>
     );
  }
}
 
export default App;

