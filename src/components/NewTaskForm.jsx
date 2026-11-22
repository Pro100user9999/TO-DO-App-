function NewTaskForm({ onAdd, isLoading = false }) {
  function handleKeyDown(event) {
    const taskText = event.currentTarget.value.trim();
    if (event.key === "Enter" && taskText) {
      onAdd(taskText);
      event.currentTarget.value = "";
    }
  }
  return (
    <input
      name="newTask"
      aria-label="Новая задача"
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onKeyDown={handleKeyDown}
      disabled={isLoading}
    />
  );
}

export default NewTaskForm;
