function TasksFilter(props) {
  return (
    <ul className="filters">
      <li>
        <button
          className={props.filter === "All" ? "selected" : ""}
          onClick={() => props.onFilterChange("All")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={props.filter === "Active" ? "selected" : ""}
          onClick={() => props.onFilterChange("Active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={props.filter === "Completed" ? "selected" : ""}
          onClick={() => props.onFilterChange("Completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TasksFilter;
