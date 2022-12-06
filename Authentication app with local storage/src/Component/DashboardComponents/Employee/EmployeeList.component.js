import { Table, Button } from "react-bootstrap";
import Employees from "./EmployessData";
import { useNavigate, Link } from "react-router-dom";
import { Fragment } from "react";

const EmployeeList = () => {
  let navigate = useNavigate();
  const handleEdit = (id, name, age) => {
    localStorage.setItem("Age", age);
    localStorage.setItem("Name", name);

    localStorage.setItem("Id", id);

    navigate("/dashboard/edituser");
  };
  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    navigate("/dashboard/employeelist");
  };
  return (
    <Fragment style={{ magin: "2rem" }}>
      <h1>Employee List </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Employees && Employees.length > 0
            ? Employees.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                      <Button
                        onClick={() => handleEdit(item.id, item.name, item.age)}
                      >
                        Edit
                      </Button>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.id)}>
                        DELETE
                      </Button>
                    </td>
                  </tr>
                );
              })
            : "No data available "}
        </tbody>
      </Table>
      <Link className="d-grid gap-2" to="/dashboard/adduser">
        <Button size="lg">Create</Button>
      </Link>
    </Fragment>
  );
};
export default EmployeeList;
