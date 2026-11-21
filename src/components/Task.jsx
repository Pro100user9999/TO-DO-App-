import { useRef, useEffect } from "react";

function Task(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.editing]);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      props.onSave(event.currentTarget.value);
    }
  }
  return (
    <li
      className={props.editing ? "editing" : props.completed ? "completed" : ""}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={props.onToggle}
        />

        <label>
          <span className="description">{props.description}</span>
        </label>

        <button className="icon icon-edit" onClick={props.onEdit}></button>
        <button className="icon icon-destroy" onClick={props.onDelete}></button>
      </div>

      {props.editing && (
        <input
          type="text"
          className="edit"
          defaultValue={props.description}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
      )}
    </li>
  );
}

export default Task;
