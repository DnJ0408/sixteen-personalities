import AuthForm from "../components/AuthForm"
import { SIGNUP_INPUTS } from "../constants/INPUTS"

const Signup = () => {
  return (
    <div>
      <AuthForm title="Signup" inputs={SIGNUP_INPUTS} />
    </div>
  )
}

export default Signup