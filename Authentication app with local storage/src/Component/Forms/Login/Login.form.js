import React, { useEffect } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../UI/Card/Card.UI";

const LoginForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const getUserArr = localStorage.getItem("signUpData");
    if (!getUserArr) {
      toast.error("No details available! Please Register first");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((el) => {
          return el.email === data.email && el.password === data.password;
        });

        if (userLogin.length === 0) {
          toast.error("invalid details");
        } else {
          localStorage.setItem("loginToken", JSON.stringify(userLogin));
          localStorage.setItem("token", "1");
          navigate("/dashboard");
        }
      }
    }
  };
  return (
    <div className="mainDiv">
      <Card className="cardDiv">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <h1 className="mainHeader">Login</h1>
            </div>
            <div className="form-group">
              <label className="label">Email</label>
              <input
                className="form-control"
                placeholder="Enter email"
                autoComplete="username email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />
              <p className="error">
                {errors.email?.type === "required" && "*Email is required"}
                {errors.email?.type === "pattern" &&
                  "*Entered email is in wrong format"}
              </p>
            </div>
            <div className="form-group">
              <label className="label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 14,
                })}
              />
              <p className="error">
                {errors.password?.type === "required" &&
                  "*Password is required"}
                {errors.password?.type === "minLength" &&
                  "*Entered password is less than 8 characters"}
                {errors.password?.type === "maxLength" &&
                  "*Entered password is more than 14 characters"}
              </p>
            </div>
            <div>
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
          <ToastContainer
            hideProgressBar={true}
            position="top-center"
            autoClose={1000}
          />
          <p className="{accLogin}">
            If you don't have account click on <span> </span>
            <Link to="/">Registration</Link>{" "}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
