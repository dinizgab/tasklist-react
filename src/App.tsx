import { useState } from "react";
import { TaskForm } from "./components/TaskForm";

import "./App.css";

export interface Tasks {
  task: string;
  completed: boolean;
}

export function App() {
  const [todos, setTodos] = useState<Tasks[]>([]);

  return (
    <>
      <TaskForm
        onFormSubmit={(task: string) => {
          setTodos([{ task: task, completed: false }, ...todos]);
          console.log(todos);
        }}
      />
      {todos.map(({ task }) => {
        <div> {task} </div>;
      })}
    </>
  );
}
