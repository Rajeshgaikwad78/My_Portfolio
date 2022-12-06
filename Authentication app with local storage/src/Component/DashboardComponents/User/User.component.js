import React, { useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import classes from './User.module.css'

const User = () => {
    const [posts, setPosts] = useState();
    useEffect(() => {
        loadUser();
    }, [])
    const loadUser = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setPosts(result.data)
    }

    return (
        <div className={classes.userTable}>
            <h3>User List :</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="h">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>

                    </tr>
                </thead>
                <tbody className="tbody">
                    {
                        posts?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td >{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}


export default User;