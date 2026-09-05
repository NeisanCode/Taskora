import { Trash2 } from "lucide-react";

export default function TodoItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div
      className="flex items-center gap-3 p-3.5 bg-white rounded-md border border-gray-100 shadow-sm hover:border-gray-200 transition-all duration-200 group"
      data-id="1"
    >
      <input
        type="checkbox"
        className="peer w-5 h-5 cursor-pointer checked:text-white"
        onChange={() => onToggleTask(task.id)}
      />

      <span className="flex-1 text-sm text-gray-600 font-medium peer-checked:line-through peer-checked:text-gray-400 transition-all">
        {task.title}
      </span>

      <button
        type="button"
        className="flex items-center justify-center p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
        title="Delete task"
        onClick={() => onDeleteTask(task.id)}
      >
        <Trash2 className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}
