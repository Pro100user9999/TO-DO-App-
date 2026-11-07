function Task(props) {
  return (
    <li
      className={props.editing ? "editing" : props.completed ? "completed" : ""}
    >
      <div className="view">
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {props.editing && (
        <input
          type="text"
          className="edit"
          value={props.description}
          defaultValue={props.description}
        />
      )}
      <label>
        <span className="description">{props.description}</span>
      </label>
    </li>
  );
}

export default Task;
