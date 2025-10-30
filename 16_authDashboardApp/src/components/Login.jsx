import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

function Login() {


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = (data) => {
    login(data.username);
    navigate("/");
  };

  return (
    <>
      <h1 className="text-center">Login Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example1">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("username", 
                    {
                      required: {value: true, message: "Username is required!"},
                      validate: (value) => value === "ankit" || "Invalid Username"
                    }
                  )}
                />
                {(errors.username && (<h3 style={{color: "red"}}>{errors.username.message}</h3>))}
                
              </div>
              

              <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  {...register("password", {
                    required: {value: true, message: "Password is required!"},
                    validate: (value) => value === "123" || "Invalid Password"
                  })}
                />
                {(errors.password && (<h3 style={{color: "red"}}>{errors.password.message}</h3>))}
                
              </div>

              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-block mb-4"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
