import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../../UI/Button/Button.UI";
import classes from "./AddUser.module.css";
import { Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Employees from "../Employee/EmployessData";
import { useEffect } from "react";

const EditUser = () => {
  const [name, setEnteredName] = useState("");
  const [age, setEnteredAge] = useState("");
  const [id, setId] = useState("");

  let navigate = useNavigate();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const submitHandler = (event) => {
    event.preventDefault();
    let a = Employees[index];
    a.name = name;
    a.age = age;
    navigate("/dashboard/employeelist");
  };
  useEffect(() => {
    setEnteredName(localStorage.getItem("Name"));
    setEnteredAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Card className={classes.login}>
        <div className="container mt-3 table">
          <section className="d-flex justify-content-between">
            <div className={classes.userForm}>
              <h3 className="text-center col-lg">Update User</h3>
              <Form>
                <Form.Group className="mb-3 col-lg" controlId="formBasicEmail">
                  <Form.Control
                    type="name"
                    name="name"
                    value={name}
                    onChange={nameChangeHandler}
                    placeholder="Enter name"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg" controlId="formBasicAge">
                  <Form.Control
                    type="number"
                    name="age"
                    value={age}
                    onChange={ageChangeHandler}
                    placeholder="Enter Your Age"
                  />
                </Form.Group>

                <Link to="/dashboard/employeelist">
                  <Button className={classes.btn} onClick={submitHandler}>
                    Update user
                  </Button>
                </Link>
              </Form>
            </div>
          </section>
        </div>
      </Card>
      <ToastContainer
        hideProgressBar={true}
        position="top-center"
        autoClose={1000}
      />
    </div>
  );
};

export default EditUser;
