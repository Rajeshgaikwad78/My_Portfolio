import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedAuth = (props) => {
    const { Cmp } = props
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('token')
        if (!login) {
            navigate('/')
        }

    },[])
    return (
        <>
            <Cmp />
        </>
    )
}

export default ProtectedAuth;