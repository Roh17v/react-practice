import React, { useState } from "react";

function Todo({ label }) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(new Date());
  return (
    <>
      <div className="m-2">
        <div>
          <h1 className="text-lg mb-2">{label}</h1>
        </div>
        <div className="grid grid-cols-[200px_150px_100px] gap-[10px] mb-[10px]">
          <input
            className="border-solid border-gray-800 border p-1.5 text-[15px] rounded-sm"
            placeholder="Todo name"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <input
            type="date"
            className="border-solid border-gray-800 border p-1.5 text-[15px] rounded-sm"
            value={date.toLocaleDateString("en-CA")}
            onChange={(e) => setDate(new Date(e.target.value))}
          />
          <button
            className="bg-[#008000] text-white"
            onClick={() => {
              setTodos((prevItem) => [
                ...prevItem,
                { todoText: todo, todoDate: date },
              ]);
              setTodo("");
              console.log(todos);
            }}
          >
            Add
          </button>
        </div>
        <div className="grid grid-cols-[200px_150px_100px]  gap-x-[10px] gap-y-[10px] items-center">
          {todos.map((elem, index) => (
            <>
              <div key={elem.date} className="text-[17px]">
                {elem.todoText}
              </div>
              <div key={elem.date} className="text-[17px]">
                {elem.todoDate.toLocaleDateString("en-US")}
              </div>
              <button
                key={elem.date}
                className="text-white bg-[#8b0000] p-[6px]"
                onClick={() => {
                  todos.splice(index, 1);
                  setTodos((prevItem) => [...prevItem]);
                }}
              >
                Delete
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
