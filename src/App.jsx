import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import TaskStatBar from "./components/TodoStatBar.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (title) => {
    setTasks((prev) => {
      const newTask = {
        id: crypto.randomUUID(),
        title: title,
        isCompleted: false,
      };
      return [...prev, newTask];
    });
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };

  return (
    <>
      <div className="flex flex-col gap-5 p-10 border border-gray-300 shadow-md shadow-blue-200 h-130 rounded-xl m-5">
        <div className="space-y-1">
          <h2 className="font-bold text-2xl">My Tasks</h2>
          <p className="font-light">Stay organised</p>
        </div>
        <TodoForm onAddTask={handleAddTask} />
        <TodoList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
        <TaskStatBar tasks={tasks} />
      </div>
    </>
  );
}
