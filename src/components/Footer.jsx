import TasksFilter from "./TasksFilter";

function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">{props.count} items left</span>
      <TasksFilter
        onFilterChange={props.onFilterChange}
        filter={props.filter}
      />
      <button className="clear-completed" onClick={props.onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
