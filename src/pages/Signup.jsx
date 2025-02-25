import AuthForm from "../components/AuthForm"
import { SIGNUP_INPUTS } from "../constants/INPUTS"
import { register } from "../api/auth"
import { useState } from "react";

const Signup = () => {

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    nickname: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  }

  return (
    <div>
      <AuthForm
        title="Signup"
        inputs={SIGNUP_INPUTS}
        formData={formData}
        handleSubmit={handleSubmit}

      />
    </div>
  )
}

export default Signup