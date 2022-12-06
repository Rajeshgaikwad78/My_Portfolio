import { Routes, Route } from "react-router-dom"
import ProtectedAuth from '../Auth/Protected.auth';
import React, { Suspense, lazy } from 'react';
const SignUp=lazy(()=>import('../Forms/SignUp/SignUp.form'));
const Login=lazy(()=>import('../Forms/Login/Login.form'));
const Main = lazy(() => import('../Layout/Main/main.layout'))
const User = lazy(() => import('../DashboardComponents/User/User.component'));
const AddUser = lazy(() => import('../DashboardComponents/AddUser/AddUser.component'));
const Home = lazy(() => import('../DashboardComponents/Home/Home.component'));
const EmployeeList = lazy (()=> import('../DashboardComponents/Employee/EmployeeList.component'));
const EditUser= lazy(()=> import('../DashboardComponents/AddUser/Edit.component'))
const Routing = () => {
    return (
       <Suspense>
            <Routes>
                <Route path='/' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<ProtectedAuth Cmp={Main} />}>
                <Route index element={<Home />} />
                <Route path='/dashboard/user' element={<User />} />
                <Route path='/dashboard/adduser' element={<AddUser />} />
                <Route path='/dashboard/edituser' element={<EditUser />} />
                <Route path='/dashboard/employeelist' element={<EmployeeList/>} />
                </Route>
                <Route path="*" element={<h3>oops!! page Not found </h3>} />
            </Routes>
            </Suspense>
    )
}

export default Routing;