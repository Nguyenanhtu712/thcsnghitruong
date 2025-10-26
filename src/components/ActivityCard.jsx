export default function ActivityCard({ title, items }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full md:w-[45%] mb-6">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-600">
            <span className="text-blue-500">✔</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}