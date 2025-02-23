// user가 website의 기본 정보를 얻고, 로그인 페이지로 이동할 수 있도록 한다.
import { Link } from "react-router-dom"
import SectionCard from "../components/SectionCard"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

      <main className="flex flex-col items-center mt-8 px-4">
        <h1 className="text-3xl font-semibold">
          무료 성격 테스트
        </h1>
        <p className="text-center text-gray-600 mt-2">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
        <SectionCard />
        <Link
          to={"/login"}
          className="bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700 mt-8
                  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          onClick={() => alert("로그인이 필요합니다. 로그인 페이지로 이동")}
        >
          Take the Test
        </Link>
      </main>
    </div>
  )
}

export default Home