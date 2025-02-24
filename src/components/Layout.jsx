import { Link } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 border-b">
        <Link to={"/"} className="text-xl font-bold">
          Sixteen Personalities
        </Link>
        <nav>
          <Link to={"/login"}>
            Login
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Layout