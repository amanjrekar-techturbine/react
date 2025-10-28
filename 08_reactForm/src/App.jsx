import { useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const loading = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("loading done");
        resolve();
      }, 2000);
    });
  };

  const submitRef = useRef();

  const onSubmit = async (data) => {
    await loading();
    console.log(data);
    if (data.username !== "ankit") {
      setError("myForm", { message: "Username Invalid!" });
    }
  };

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: { value: true, message: "Username is required!" },
              minLength: { value: 3, message: "Min length is 3!" },
              maxLength: { value: 8, message: "Max length is 8!" },
            })}
            type="text"
            placeholder="username"
          />
          <br />
          {errors.username && (
            <div className="text-red">{errors.username.message}</div>
          )}
          <input
            {...register("password", {
              maxLength: { value: 8, message: "Max length is 8!" },
            })}
            type="text"
            placeholder="password"
          />
          <br />
          {errors.password && (
            <div className="text-red">{errors.password.message}</div>
          )}
          <button disabled={isSubmitting} ref={submitRef} type="submit">
            SUBMIT
          </button>
          {errors.myForm && (
            <div className="text-red">{errors.myForm.message}</div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
