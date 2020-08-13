import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/landing";
import TeacherList from "./pages/teacherlist";
import TeacherForm from "./pages/teacherform";
import Login from "./pages/login";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Routes;
