import React,{useEffect} from "react";
import './SignUp.css'
import { useForm } from "react-hook-form";
import {Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../../UI/Card/Card.UI";

const SignUp=()=> {
    const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem('token')) {
          navigate('/dashboard')
      }
  }, [])
  const {register,formState: { errors },handleSubmit,} = useForm();
  const onSubmit = (data) => {
    
    toast.error("data added successfully");
    navigate("/login")
    localStorage.setItem("signUpData", JSON.stringify([data]));
};
  return (
    <div className="mainDiv">
    <Card className="mainCard">
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
        <div className="form-group">
          <h1 className="mainHeader" >Registration</h1>
        </div>
        <div className="form-group">
          <label className="label">Name</label>
          <input 
          className="form-control"
            placeholder="Enter user name"
            {...register("name", { required: true })}
            data-testId="userName"
          />
          <p className="error">
            {errors.name?.type === "required" && "Name is required"}
          </p>
        </div>
        <div>
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
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </p>
        </div>
        <div className="form-group">
          <label className="label">Phone Number</label>
          <input
            className="form-control"
            type="number"
            placeholder="Enter mobile number"
            {...register("number", {
              minLength:10,
              maxLength: 10,
              required:true
              
            })}
          />
          <p className="error">
            {errors.number?.type ==="required"  &&
            "Mobile no. is required"}
            {errors.number?.type ==="maxLength"  && 
            "Entered number is more than 10 digits"}
            {errors.number?.type ==="minLength"  && 
            "Entered number is less than 10 digits"}
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
          {errors.password?.type ===  "required" &&
                  "*Password is required"}
                {errors.password?.type ===  "minLength" &&
                  "*Entered password is less than 8 characters"}
                {errors.password?.type === "maxLength" &&
                  "*Entered password is more than 14 characters"}
          </p>
        </div>
        <div>
          <input className="button" type="submit" />
          
        </div>
      </form>
      <p className="">Already Have an Account <span><Link to="/login">LogIn</Link></span> </p>
      <ToastContainer hideProgressBar={true} position="top-center" autoClose={1000} />
      </div>
    </Card>
    </div>
  );
}

export default SignUp;