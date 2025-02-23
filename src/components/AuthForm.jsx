// Login, signup 페이지에 사용
import { Link } from "react-router-dom"

const AuthForm = ({ title, inputs }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 ">
      <div className="max-w-sm w-full p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

        <div className="bg-red-50 p-6 rounded-lg">
          <form className="flex flex-col space-y-6">
            {inputs.map((input) => (
              <input
                key={input.name}
                type={input.type}
                placeholder={input.placeholder}
                className="border border-gray-300 p-3 h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            ))}
            <button className="bg-red-600 text-white py-3 h-12 rounded-lg hover:bg-red-700 transition">
              {title}
            </button>
          </form>
        </div>

        <div className="text-center mt-4">
          <span className="text-gray-600">
            {title === "Login" ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
          </span>
          <Link
            to={title === "Login" ? "/signup" : "/login"}
            className="text-red-500 font-semibold ml-2 hover:underline"
          >
            {title === "Login" ? "Signup" : "Login"}
          </Link>
        </div>
      </div >
    </div>
  )
}

export default AuthForm