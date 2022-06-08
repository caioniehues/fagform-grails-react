import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import AdminHome from "../screens/AdminHome";
import { Login } from "../screens/Login";
import { ForgotPassword } from "../screens/ForgotPassword";
import { UserRegistration } from "../screens/UserRegistration/UserRegistration";
import { CourseRegistration } from "../screens/CourseRegistration/CourseRegistration";
import { DepartmentRegistration } from "../screens/DepartmentRegistration/DepartmentRegistration";
import { Dashboard } from "../screens/Dashboard";
import { ChangePassword } from "../screens/ChangePassword";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<ForgotPassword />} path="/forgotPassword" />
        <Route element={<ChangePassword />} path="/changePassword" />
        <Route element={<UserRegistration />} path="/userRegister" />
        <Route element={<CourseRegistration />} path="/courseRegister" />
        <Route
          element={<DepartmentRegistration />}
          path="/departmentRegister"
        />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<AdminHome />} path="/home" exact />
      </Routes>
    </BrowserRouter>
  );
};
