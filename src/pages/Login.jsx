import AuthForm from "../components/AuthForm"
import { LOGIN_INPUTS } from "../constants/INPUTS"

const Login = () => {
  return (
    <div>
      <AuthForm title="Login" inputs={LOGIN_INPUTS} />
    </div>
  )
}

export default Login