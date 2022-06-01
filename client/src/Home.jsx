import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Fag Form</h1>
      <nav>
        <ul>
          <li>
            <Link to="/userRegister">USUÁRIOS</Link>
          </li>
          <li>
            <Link to="/courseRegister">CURSOS</Link>
          </li>
          <li>
            <Link to="/departmentRegister">DEPARTAMENTOS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
