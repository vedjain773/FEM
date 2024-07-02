"use client"

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

export default function Home() {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const [allTodo, setAllTodo] = useState([]);

  const rTId = (id) => {
    const newTodo = todo.filter(task => task.id != id);
    setTodo(newTodo);
    setAllTodo(newTodo);
  }

  const remComp = () => {
    const newTodo = todo.filter(task => task.completed == false);
    setTodo(newTodo);
    setAllTodo(newTodo);
  }

  const comp = () => {
    const compTodo = allTodo.filter(task => task.completed == true);
    setTodo(compTodo);
  }

  const all = () => {
    setTodo(allTodo);
  }

  const active = () => {
    const active = allTodo.filter(task => task.completed != true);
    setTodo(active);
  }

  useEffect(() => {
    const taskIn = document.querySelector("#taskInput");

    taskIn.addEventListener("change", () => {
      if (taskIn.value != "") {
        const newTask = {
          completed: false,
          msg: taskIn.value,
          id: count
        }

        setTodo([...todo, newTask]);
        setAllTodo([...todo, newTask]);
        setCount(count + 1);
      }
    })
  }, [count, todo, allTodo])

  return (
    <main>
      <Header />
      <input id="taskInput"></input>
      <div className={styles.taskCont}>
        <ul>
          {todo.map((task) => (
            <li key={task.id}>
              <ListItem
              text={task.msg}
              taskObj={task}
              removeTask={() => rTId(task.id)}/>
            </li>
          ))}
        </ul>
        <div className={styles.infoBar} id="info">
          <section id="left">
            <span>
              {allTodo.filter(task => task.completed != true).length}
            </span> <span>Items left</span>
          </section>
          <section>
            <button onClick={all}>All</button>
            <button onClick={active}>Active</button>
            <button onClick={comp}>Completed</button>
          </section>
          <section id="completed">
            <button onClick={remComp}>Clear Completed</button>
          </section>
        </div>
      </div>
    </main>
  );
}

function Header() {
  const [isDark, setIsDark] = useState(true);
  const handleClick = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }

  return (
    <div id="header">
      <p>TODO</p>
      <div 
        onClick={handleClick}
        id={isDark ? "dark" : "light"}>
      </div>
    </div>
  )
}

function ListItem({ text, taskObj, removeTask }) {
    const checkTask = (event) => {
      event.target.nextSibling.style.textDecoration = "line-through";
      event.target.nextSibling.style.color = "var(--strike-txt)";
      event.target.style.background = "var(--circle-fill)";
      taskObj.completed = true;
    }

    return (
        <div className={styles.listItem}>
            <div className={styles.left}>
              <div
                className={styles.check}
                style={{background: taskObj.completed ? "var(--circle-fill)" : "none"}}
                onClick={checkTask}>
              </div>
              <p
                style={
                  {textDecoration: taskObj.completed ? "line-through" : "none",
                   color: taskObj.completed ? "var(--strike-txt)" : "var(--text-clr)"
                  }}>
                {text}
              </p>
            </div>
            <div
              className={styles.cross}
              onClick={removeTask}>
            </div>
        </div>
    );
}
