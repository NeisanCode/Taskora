export default function TodoStatBar({ tasks }) {
  return (
    <div className="border-t pt-4 border-t-gray-300 flex justify-between font-light">
      <span>{tasks.length} total task</span>
      <span>{tasks.filter((task) => task.isCompleted).length} completed</span>
    </div>
  );
}
