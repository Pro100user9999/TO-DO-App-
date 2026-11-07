import Task from "./Task";

function TaskList(props) {
  return (
    <ul className="todo-list">
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          completed={task.completed}
          editing={task.editing}
        />
      ))}
    </ul>
  );
}

export default TaskList;
