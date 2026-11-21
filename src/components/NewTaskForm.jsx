function NewTaskForm(props) {
  function handleKeyDown(event) {
    const taskText = event.currentTarget.value.trim();
    if (event.key === "Enter" && taskText) {
      props.onAdd(taskText);
      event.currentTarget.value = "";
    }
  }
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onKeyDown={handleKeyDown}
      disabled={props.isLoading}
    />
  );
}

export default NewTaskForm;
