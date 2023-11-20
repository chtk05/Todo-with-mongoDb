import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";

interface Todo {
  task: string;
  done: boolean;
  _id: string;
}
const Todopage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get("http://localhost:8083/get")

      .then((result) => {
        // console.log(result.data);
        setTodos(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id: string) => {
    setIsLoading(true);
    axios
      .put(`http://localhost:8083/update/${id}`)
      .then((result) => {
        console.log(result);
        // location.reload();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        location.reload();
      });
  };
  if (isLoading) return <h1>Loading....</h1>;
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
          todos.map((todo) => (
            <div key={todo._id} onClick={() => handleEdit(todo._id)}>
              <span style={todo.done ? { textDecoration: "line-through" } : {}}>
                {todo.task}
              </span>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Todopage;
