import React from "react";
import { Input } from "./index.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContextProvider.jsx";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const { login } = useAuth();
  const navigate = useNavigate()

  const onSubmit = async (data) => {

    await axios
      .post("http://localhost:3000/api/customers/login", data)
      .then((response) => {
        console.log("Response:", response.data);
        alert(response.data)
        login(data.email)
        navigate("/")
      })
      .catch((error) => {
        if (axios.isAxiosError(error) && error.response?.status == 404) {
          setError("login", {
            type: "manual",
            message: error.response?.data,
          });
        } else {
          console.error("Error:", error);
        }
      });
  };

  return (
    <section className=" mt-5">
      <div className="mask d-flex align-items-center gradient-custom-3">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="bg-info card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                      label="Your Email"
                      type="email"
                      name="email"
                      register={register}
                      validation={{
                        required: {
                          value: true,
                          message: "Email is required!",
                        },
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                        onChange: () => clearErrors("login"),
                        validate: (value) =>
                          value.trim() != "" || "Email is required!",
                      }}
                      errors={errors}
                    />

                    <Input
                      label="Password"
                      type="password"
                      name="password"
                      register={register}
                      validation={{
                        required: {
                          value: true,
                          message: "Password is required!",
                        },
                        onChange: () => clearErrors("login"),
                        validate: (value) =>
                          value.trim() != "" || "Password is required!",
                      }}
                      errors={errors}
                    />

                    {errors?.login && (
                      <h2 style={{ color: "red", textAlign: "center", marginBottom: "21px" }}>{errors?.login?.message}</h2>
                    )}

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        disabled={isSubmitting}
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      New User?{" "}
                      <Link to="/register" className="fw-bold text-body">
                        <u>Register here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
