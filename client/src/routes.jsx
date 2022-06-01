import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Home";
import { UserRegistration } from "./screens/UserRegistration";
import { CourseRegistration } from "./screens/CourseRegistration";
import { DepartmentRegistration } from "./screens/DepartmentRegistration";
import { HistoryView } from "./screens/UserHistory";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserRegistration />} path="/userRegister" />
        <Route element={<CourseRegistration />} path="/courseRegister" />
        <Route element={<HistoryView />} path="/userHistory" />
        <Route
          element={<DepartmentRegistration />}
          path="/departmentRegister"
        />
        <Route element={<Home />} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
};
