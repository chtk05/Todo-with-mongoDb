import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";

const Todopage = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8083/get")

      .then((result) => {
        // console.log(result.data);
        setTodos(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        <h1>To Do List </h1>
        <TodoInput />
        {todos.length === 0 ? (
          <div>
            <h2>No record</h2>
          </div>
        ) : (
          todos.map((todo) => <div key={todo.task}>{todo.task}</div>)
        )}
      </div>
    </>
  );
};

export default Todopage;
