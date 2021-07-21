import { useState } from 'react';
import "../styles/todo.css"

export const TodoList = () => {

  type Todo = {
    id : number
    title : string
    doneflg : boolean
  };

  const [todos, setTodos] = useState<Todo[]>([{
    id : 0,
    title : "title1",
    doneflg : false
  }])

  const [inputVal, setInputVal] = useState<string>("")

  const OnClickAddTodo = () => {
    if(inputVal===""){return}
    const i = new Date().getTime();
    const todolist = todos;
    todolist.push({
      id : i,
      title : inputVal,
      doneflg : false
    })
    setInputVal("")
    setTodos(todolist)
  }

  const doneTodo = (key : Todo["id"]) => {
    const remainingTodos =todos.map((todo:Todo)=>{
      if(todo.id === key){
        todo.doneflg = !todo.doneflg;
      }
      return todo
    })
    setTodos(remainingTodos)
  }

  const  deleteTodo = (key: Todo["id"]) => {
    const remainingTodos =todos.filter((todo:Todo)=>{
      return todo.id !== key
    })
    setTodos(remainingTodos)
  }

  return (
    <div className = "todolist">
      <h1 className = "title">TODOLIST</h1>
      <div className = "input_container">
        <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button onClick={() => OnClickAddTodo()}>追加</button>
      </div>
      <hr />
      <div className = "todo_container">
        {todos.map((todo: Todo) => {
          return(
             <div key = {todo.id} className = {todo.doneflg? "todo done": "todo"}>
              <button className = "btn_done" onClick={()=>{doneTodo(todo.id)}}>✔</button>
              <div>{todo.title}</div>
              <button className = "btn_delete" onClick={()=>{deleteTodo(todo.id)}}>削除</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}