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
    <div>
      <div>
        <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button onClick={() => OnClickAddTodo()}>追加</button>
      </div>
      <div>
        <div>
          {todos.map((todo: Todo) => {
            return(
              <div key = {todo.id} className = {todo.doneflg? "done": ""}>
                <div><button onClick={()=>{doneTodo(todo.id)}}>✔</button></div>
                <div>{todo.title}</div>
                <div><button onClick={()=>{deleteTodo(todo.id)}}>削除</button></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}