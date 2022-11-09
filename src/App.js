import React, { useState } from "react";
import "./styles.css";
/* import background from "./background.jpeg"; */
/* import background from "./assets/background.jpeg"; */

const INITIAL_STATE = [
  { id: 1, task: "Okula Git", finished: true },
  { id: 2, task: "Fatura ode", finished: true },
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="body" id="img" /* style={
     {
        background: `url(${background})`
      }
    } */ >  
    <div className="App">
      <h1 className="title_h1">What is your planning today?</h1>
      <div className="add_form">
      g
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
              { id: Date.now(), task: newTitle, completed: false },
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
                    el.id === item.id ? { ...el, finished: !el.finished } : el
                  )
                );
              }}
              className={item.finished ? "done" : ""}
            >
              {item.task}
            </div>
          )
        )}
      </div>
      <button onClick={() => setList(list.filter(item => !item.finished)) } 
      className="delete">Clear All</button>
    </div>
    </div>
  );
}
