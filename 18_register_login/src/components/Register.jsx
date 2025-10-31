import React from "react";
import { Input } from "./";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("password");

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data);

    await axios
      .post("http://localhost:3000/api/customers/register", data)
      .then((response) => {
        console.log("Response:", response.data);
        alert(response.data)
        navigate("/login")
      })
      .catch((error) => {
        if (axios.isAxiosError(error) && error.response?.status == 400) {
          setError("email", {
            type: "manual",
            message: error.response?.data,
          });
        } else {
          console.error("Error:", error);
        }
      });
  };

  return (
    <section>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3 mt-5">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 ">
              <div className="bg-warning card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                      label="Your Name"
                      type="text"
                      name="name"
                      register={register}
                      validation={{
                        required: { value: true, message: "Name is required!" },
                        validate: (value) =>
                          value.trim() != "" || "Name is required!",
                      }}
                      errors={errors}
                    />

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
                        onChange: () => clearErrors("email"),
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
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
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                          message:
                            "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
                        },
                        validate: (value) =>
                          value.trim() != "" || "Password is required!",
                      }}
                      errors={errors}
                    />

                    <Input
                      label="Repeat your password"
                      type="password"
                      name="confirmPassword"
                      register={register}
                      validation={{
                        required: {
                          value: true,
                          message: "Confirm Password is required!",
                        },
                        validate: (value) =>
                          value == password || "Passwords do not match!",
                      }}
                      errors={errors}
                    />

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        disabled={isSubmitting}
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link to="/login" className="fw-bold text-body">
                        <u>Login here</u>
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

export default Register;
