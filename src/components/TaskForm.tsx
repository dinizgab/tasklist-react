import { ChangeEvent, useState } from "react";

interface TaskFormProps {
  onFormSubmit: (text: string) => void;
}

function userInput(initialValue: string) {
  const [task, setTask] = useState(initialValue);
  return {
    task,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value),
  };
}

export function TaskForm({ onFormSubmit }: TaskFormProps) {
  const input = userInput("");

  return (
    <div className="TaskForm">
      <h1>Lista de tarefas</h1>

      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();
          onFormSubmit(input.task);
        }}
      >
        <input
          autoComplete="off"
          className="input"
          placeholder="Digite a tarefa"
          {...input}
        />
        <button type="submit" className="register">
          Cadastrar tarefa
        </button>
      </form>
    </div>
  );
}
