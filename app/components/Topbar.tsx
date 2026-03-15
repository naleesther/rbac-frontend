"use client";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 border-b">

      <input
        placeholder="Search..."
        className="border rounded-lg px-4 py-2 w-72"
      />

      <div className="flex items-center gap-4">

        <span className="text-sm font-medium">
          John
        </span>

        <div className="w-9 h-9 bg-gray-300 rounded-full"></div>

      </div>

    </div>
  );
}