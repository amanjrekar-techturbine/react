import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    
    formState: { errors, isSubmitting },
  } = useForm();

  const buffer = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 3000);
    });
  };

  const onSubmit = async (data) => {
    // await buffer();

    console.log(data);
    if(data.username != "ankit"){
      setError("customError", {type: "custom", message: "Invalid Username"})
    }else{

    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", {
            required: { value: true, message: "Username is required!" },
            minLength: { value: 3, message: "Min Length should be 3" },
            maxLength: { value: 8, message: "Max Length should be 8" },
            // onBlur: () => {}
            // onChange: () => clearErrors("customError"),
            validate: (value) => value === "swapnil" || "Invalid Username",
          })}
          type="text"
          placeholder="username"
        />
        <br />
        {errors.username && <div>{errors.username.message}</div>}

        <input {...register("password")} type="text" placeholder="password" />
        <br />

        <button type="submit">
          Submit
        </button>
        {errors.customError && <div>{errors.customError.message}</div>}
      </form>
    </>
  );
}

export default App;
