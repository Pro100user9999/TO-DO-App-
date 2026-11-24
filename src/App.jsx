import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";

function App() {
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки задачи: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const loadedTasks = data.map((task) => {
          return {
            id: task.id,
            description: task.title,
            completed: task.completed,
            editing: false,
            createdAt: new Date(),
          };
        });
        setTasks(loadedTasks);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

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

  function addTask(description) {
    const newTask = {
      id: crypto.randomUUID(),
      description,
      completed: false,
      editing: false,
      createdAt: new Date(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
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
    const trimmedDescription = description.trim();
    if (!trimmedDescription) {
      return;
    }
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, description: trimmedDescription, editing: false };
        }
        return task;
      }),
    );
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === "Active") {
      return !task.completed;
    }
    if (filter === "Completed") {
      return task.completed;
    }
    return true;
  });

  function clearCompleted() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAdd={addTask} isLoading={isLoading} />
      </header>
      <section className="main">
        <TaskList
          tasks={visibleTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
          onSave={saveTask}
        />
      </section>
      <Footer
        count={visibleTasks.length}
        onFilterChange={setFilter}
        filter={filter}
        onClearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
