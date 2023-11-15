import axios from "axios";
import { FormEvent, useState } from "react";

const TodoInput = () => {
  const [task, setTask] = useState("");

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8083/add", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter to do list"
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button type="button" onClick={handleAdd}>
          ADD
        </button>
      </div>
    </>
  );
};

export default TodoInput;
