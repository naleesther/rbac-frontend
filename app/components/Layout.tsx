

export default function TaskBoard() {
 
  return (
    <div className="flex gap-6">

      {/* GROUP 1 */}
      <div className="bg-white rounded-xl p-4 w-[260] shadow-sm">

        <h3 className="font-semibold mb-4 text-gray-700 " >
          <p className="w-6 h-6 rounded-full bg-blue-400 ml-8">Group 1</p> 
        </h3>
        <div className="space-y-4">

          {/* TASK CARD */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">

            <p className="text-sm font-medium text-gray-800">
              Call about proposal
            </p>

            <div className="flex items-center justify-between mt-3">

              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                Urgent
              </span>

              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                <div className="w-6 h-6 rounded-full bg-green-400"></div>
              </div>

            </div>

          </div>


          {/* TASK CARD */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">

            <p className="text-sm font-medium text-gray-800">
              Send onboarding docs
            </p>

            <div className="flex items-center justify-between mt-3">

              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                Review
              </span>

              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-purple-400"></div>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* GROUP 2 */}
      <div className="bg-white rounded-xl p-4 w-[260px] shadow-sm">

        <h3 className="font-semibold mb-4 text-gray-700">
          Group 2
        </h3>

        <div className="space-y-4">

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">

            <p className="text-sm font-medium text-gray-800">
              Prepare pitch deck
            </p>

            <div className="flex items-center justify-between mt-3">

              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                Completed
              </span>

              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}