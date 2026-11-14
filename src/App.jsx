import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Купить молоко",
      completed: false,
      editing: false,
    },
    {
      id: 2,
      description: "Изучить React",
      completed: false,
      editing: false,
    },
    {
      id: 3,
      description: "Сделать домашнее задание",
      completed: false,
      editing: false,
    },
  ]);
  const activeTasks = tasks.filter((task) => !task.completed).length;

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function editTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, editing: true };
        }
        return task;
      }),
    );
  }

  function saveTask(id, description) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, description, editing: false };
        }
        return task;
      }),
    );
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
          onSave={saveTask}
        />
      </section>
      <Footer count={activeTasks} />
    </section>
  );
}

export default App;
