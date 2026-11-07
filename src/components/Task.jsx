function Task(props) {
  return (
    <li
      className={props.editing ? "editing" : props.completed ? "completed" : ""}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          readOnly
        />

        <label>
          <span className="description">{props.description}</span>
        </label>

        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>

      {props.editing && (
        <input type="text" className="edit" defaultValue={props.description} />
      )}
    </li>
  );
}

export default Task;
