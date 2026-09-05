import { Plus } from "lucide-react";
import { useState } from "react";

export default function TodoForm({ onAddTask }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    text.trim() && onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={text}
        type="text"
        className="border border-gray-300 flex-1 px-3.5 py-3 text-[15px] rounded-md"
        placeholder="Add a new task"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="flex gap-2 items-center bg-blue-400 px-5 py-3 text-white rounded-md cursor-pointer"
      >
        <Plus className="size-5" />
        <span>Add</span>
      </button>
    </form>
  );
}
