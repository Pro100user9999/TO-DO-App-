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
          onToggle={() => props.onToggle(task.id)}
          onDelete={() => props.onDelete(task.id)}
          onEdit={() => props.onEdit(task.id)}
          onSave={(description) => props.onSave(task.id, description)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
