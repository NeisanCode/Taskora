import TodoIcon from "../assets/todo-icon.png";
import TodoItem from "./TodoItem";

function EmptyItem() {
  return (
    <div className="text-center p-2 my-auto font-light flex flex-col items-center gap-2">
      <img src={TodoIcon} width={50} height={50} alt="Todo icon" />
      <p>No tasks yet. Add one to get started!</p>
    </div>
  );
}

export default function TodoList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length <= 0) {
    return <EmptyItem />;
  }
  return (
    <ul className="flex-1">
      {tasks.map((task) => (
        <li key={task.id}>
          <TodoItem
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        </li>
      ))}
    </ul>
  );
}
