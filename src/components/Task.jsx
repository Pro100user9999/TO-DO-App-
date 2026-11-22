import { useRef, useEffect, useState, useId } from "react";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

function Task({
  description,
  createdAt,
  completed = false,
  editing = false,
  onToggle,
  onEdit,
  onDelete,
  onSave,
}) {
  const [, setTick] = useState(0);
  const inputRef = useRef(null);
  const checkboxId = useId();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTick((prevTick) => prevTick + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onSave(event.currentTarget.value);
    }
  }
  const timeAgo = formatDistanceToNow(createdAt, {
    addSuffix: true,
    includeSeconds: true,
    locale: ru,
  });
  return (
    <li className={editing ? "editing" : completed ? "completed" : ""}>
      <div className="view">
        <input
          id={checkboxId}
          name="completed"
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />

        <label htmlFor={checkboxId}>
          <span className="description">{description}</span>
        </label>
        <span className="block pl-[60px]  text-sm text-gray-500">
          создано {timeAgo}
        </span>

        <button
          className="icon icon-edit"
          onClick={onEdit}
          aria-label="Редактировать задачу"
        ></button>
        <button
          className="icon icon-destroy"
          onClick={onDelete}
          aria-label="Удалить задачу"
        ></button>
      </div>

      {editing && (
        <input
          name="description"
          aria-label="Текст задачи"
          type="text"
          className="edit"
          defaultValue={description}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
      )}
    </li>
  );
}

export default Task;
