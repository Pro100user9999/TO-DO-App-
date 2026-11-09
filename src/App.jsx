import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const tasks = [
    {
      id: 1,
      description: "Купить молоко",
      completed: true,
      editing: false,
    },
    {
      id: 2,
      description: "Изучить React",
      completed: false,
      editing: true,
    },
    {
      id: 3,
      description: "Сделать домашнее задание",
      completed: false,
      editing: false,
    },
  ];
  const activeTasks = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList tasks={tasks} />
      </section>
      <Footer count={activeTasks} />
    </section>
  );
}

export default App;
