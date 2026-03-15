
"use client";

export default function Taskcontrol() {
  return (
    <div className="w-[420px] bg-white p-5 overflow-y-auto">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button className="text-gray-500">←</button>
        <h2 className="font-semibold text-lg">Tasks</h2>
      </div>

      {/* Search */}
      <input
        placeholder="Search table"
        className="w-full mb-4 px-3 py-2 bg-gray-100 rounded-lg text-sm"
      />

      {/* Group 1 */}
      <div className="bg-gray-50 rounded-xl p-4 mb-5">

        <div className="flex items-center gap-2 mb-3 font-medium">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          Group 1
        </div>

        <div className="space-y-3 text-sm">

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Title
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Call about proposal
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Send onboarding doc
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            Follow up with Mira
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Prepare pitch deck
          </label>

        </div>
      </div>

      {/* Search board */}
      <input
        placeholder="Search board"
        className="w-full mb-4 px-3 py-2 bg-gray-100 rounded-lg text-sm"
      />

      {/* Group 2 */}
      <div className="bg-gray-50 rounded-xl p-4">

        <div className="flex items-center gap-2 mb-3 font-medium">
          <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
          Group 2
        </div>

        {/* Task card */}
        <div className="bg-white rounded-lg p-3 shadow-sm text-sm">

          <p className="font-medium mb-1">
            Call about proposal
          </p>

          <p className="text-gray-500 text-xs mb-2">
            Client name : Tech Ltd.
          </p>

          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
            Urgent
          </span>

          {/* avatars */}
          <div className="flex items-center gap-1 mt-3 mb-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
          </div>

          {/* progress */}
          <p className="text-xs text-gray-500 mb-1">
            Project completion :
          </p>

          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-gray-500 rounded w-2/3"></div>
          </div>

        </div>

      </div>

    </div>
  );
}