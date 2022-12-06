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
const AddUser = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = () => {
    let ids = uuid();
    let uniqId = ids.slice(0, 8);
    const userData = {
      id: uniqId,
      name: enteredName,
      age: enteredAge,
    };
    Employees.push(userData);
    toast.error("User added successfully");
    console.log(userData);
  };
  return (
    <div>
      <Card className={classes.login}>
        <div className="container mt-3 table">
          <section className="d-flex justify-content-between">
            <div className={classes.userForm}>
              <h3 className="text-center col-lg">Add User</h3>
              <Form>
                <Form.Group className="mb-3 col-lg" controlId="formBasicEmail">
                  <Form.Control
                    type="name"
                    name="name"
                    onChange={nameChangeHandler}
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg" controlId="formBasicAge">
                  <Form.Control
                    type="number"
                    name="age"
                    onChange={ageChangeHandler}
                    placeholder="Enter Your Age"
                  />
                </Form.Group>

                <Link to="/dashboard/employeelist">
                  <Button className={classes.btn} onClick={submitHandler}>
                    Add user
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

export default AddUser;
