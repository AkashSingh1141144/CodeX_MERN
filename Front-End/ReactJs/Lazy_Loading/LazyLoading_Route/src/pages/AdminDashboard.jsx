import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStats([
        { name: "Users", value: 1200 },
        { name: "Orders", value: 350 },
        { name: "Revenue", value: "$15k" },
      ]);
    }, 1500);
  }, []);

  return (
    <div>
      <h1 className="text-9xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600">Analytics Overview</p>
      <ul className="mt-4 space-y-2">
        {stats.length
          ? stats.map((item, i) => (
              <li key={i} className="border p-3 rounded shadow">
                {item.name}: {item.value}
              </li>
            ))
          : <p>Loading stats...</p>}
      </ul>
    </div>
  );
}
