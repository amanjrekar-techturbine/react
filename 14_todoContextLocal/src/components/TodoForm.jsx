import React from "react";
import { useState, useRef } from "react";
import useTodoContext from "../contexts/TodoContext";

function TodoForm() {
  const [todoTitle, setTodoTitle] = useState("");
  const { addTodo } = useTodoContext();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    

    if (!todoTitle) return;

    addTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
