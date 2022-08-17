import React, { useState } from "react";
import useForm from "../../utils/hooks/useForm";
const LoginForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { handleSubmit, handleChange } = useForm();
  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          email: setEmailInput,
          password: passwordInput,
        })
      }
      className="modal-form"
    >
      <label htmlFor="password">password</label>
      <input defaultValue={passwordInput} onChange={(e) => handleChange(e, setPasswordInput)} name="password" type="password" />

      <label htmlFor="email">email</label>
      <input defaultValue={emailInput} onChange={(e) => handleChange(e, setEmailInput)} name="email" type="text" />

      <button type="submit">Submit</button>
    </form>
  );
};
export default LoginForm;
