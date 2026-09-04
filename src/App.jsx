
import TodoIcon from "./assets/todo-icon.png";


export default function App() {
  return (
    <>
      <div className="flex flex-col gap-5 p-10 border border-gray-300 shadow-md shadow-blue-200 h-130 rounded-xl m-5">
        <div className="space-y-1">
          <h2 className="font-bold text-2xl">My Tasks</h2>
          <p className="font-light">Stay organised</p>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="border border-gray-300 flex-1 px-3.5 py-3 text-[15px] rounded-md"
            placeholder="Add a new task"
          />
          <button className="bg-blue-400 px-5 py-3 text-white rounded-md hover:cursor-pointer">
            Add
          </button>
        </div>

        <div className="text-center p-2 my-auto font-light flex flex-col items-center gap-2">
          <img src={TodoIcon} width={50} height={50} alt="Todo icon" />
          <p>No tasks yet. Add one to get started!</p>
        </div>

        <div className="border-t pt-4 border-t-gray-300 flex justify-between font-light">
          <span>0 total task</span>
          <span>0</span>
          <span>completed</span>
        </div>
      </div>
    </>
  );
}
