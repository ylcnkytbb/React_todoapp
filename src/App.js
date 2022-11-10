import React, { useEffect, useState } from "react";
import "./styles.css";
/* import Icons from './assets/Icons'
 */
/* import background from "./background.jpeg"; */
/* import background from "./assets/background.jpeg"; */

const INITIAL_STATE = [
  { id: 1, task: "TodoListi tamamla", finished: true },
  { id: 2, task: "Admin paneli tamamla", finished: true },
  { id: 3, task: "Ekmek al", finished: true },
];

/* ******** local storage ******** */

/* useEffect(() => {
  localStorage.setItem('list' ,JSON.stringify(list))
}
) */

function fonk1()
{
  window.alert('Merhaba');
}
export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setNewTitle] = useState("");
  /* const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task)) => 
      (task.id === id ? updatedTask : task)))
  } */

  return (
    <div className="body" id="img">  
    <div className="App">
      <h1 className="title_h1">What is your planning today?</h1>
      <div className="add_form">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholer="Add a todo.."
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
        >Add
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
      <div>
      <div className="delete_btn">
      <button onClick={() => setList(list.filter(item => !item.finished)) } 
      className="delete"> Clear All
      </button>

      {/* <div class="alert alert-success" role="alert">
     A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div> */}
      </div>
      </div>
    </div>
    </div>
  );
}
