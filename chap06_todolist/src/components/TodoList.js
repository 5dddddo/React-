import React from "react";
import TodoListItem from './TodoListItem'

// function Todolist({Todolist}) {
  function Todolist(props) {
    const {todoList, updateTodo,deleteTodo} = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>ID</th>
            <th>Todo</th>
            <th style={{ width: "10%" }}>Complete</th>
            <th style={{ width: "10%" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* 상위(부모) 값이 변경되면 (랜더링 될때마다) 다시 그리게 되므로 최적화 필요 */}
          {/* 하위 component - TodoListItem으로 다시 todo 전달 */}
          {todoList.map(todo=> <TodoListItem key={todo.id} todo={todo}
           updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoListItem>)}

        </tbody>
      </table>
    </div>
  );
}
export default Todolist;
