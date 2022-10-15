import React from "react";
import TodoListItem from "./TodoListItem";
import { connect } from 'react-redux'

function Todolist(props) {
  const { todoList } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{width: "10%"}}>ID</th>
            <th>Todo</th>
            <th style={{width: "10%"}}>Complete</th>
            <th style={{width: "10%"}}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
        </tbody>
      </table>
    </div>
  );
}
export default connect(
  state => ({
    todoList: state.todoListR.todoList,
  })
)(Todolist);