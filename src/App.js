import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, task: "Okula Git", finished: true },
  { id: 2, task: "Fatura ode", finished: true },
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="App">
      <h1>What is your planning today?</h1>
      <div className="add_form">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholer="Add a todo"
        />
        <button
          onClick={() =>
            {
            setList([
              ...list,
              { id: Date.now(), title: newTitle, completed: false },
            ]);
          setNewTitle("");
          }
          }
        >
          Add
        </button>
      </div>
      <div className="list">
        {list.map(
          (
            item //map metodu bize her zaman dizi döndürür
          ) => (
            <div
              key={item.id}
              onClick={() => {
                setList(
                  list.map((el) =>
                    el.id === item.if ? { ...el, finished: !el.finished } : el
                  )
                );
              }}
              className={item.finished ? "done" : ""}
            >
              {item.title}
            </div>
          )
        )}
      </div>
      <button onClick={() => setList(list.filter(item => !item.finished)) } 
      className="delete">Clear All</button>
    </div>
  );
}
