import Image from "next/image"
import HomePage  from "../page"
import Dashboard from "../dashboard/page"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-[#F6F6F6]">

      {/* sidenav*/}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="absolute top-8 left-12">
           <Image src="/images/logo-image.png" alt="Oblio Logo" width={120} height={40}/>
        </div>

        {/* login */}
        <div className="bg-white shadow-xl rounded-2xl p-10 w-[420px]">

          <h2 className="text-2xl font-semibold text-center">
            Login
          </h2>

          <p className="text-gray-400 text-center mb-6">
            Enter your details to continue
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">
                Email
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none"
              />
            </div>

            <div className="flex justify-between text-sm mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="text-orange-500 cursor-pointer">
                Forgot password?
              </span>

            </div>
            <button
              className="w-full bg-orange-500 text-white py-3 rounded-lg mt-3 hover:bg-orange-600 transition">
              Log in
            </button>
       </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?
            <span className="font-semibold text-black ml-1 cursor-pointer">
              Sign up
            </span>
          </p>

        </div>
      </div>


      {/* dashboard */}
      <div className="relative ">
      
      <Dashboard/>
      </div>

    </div>
  )
}