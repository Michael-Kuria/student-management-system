import "./App.css";
import Home from "./components/Home";
import Students from "./components/Students";
import About from "./components/About";
import { getAllStudents } from "./client/Client";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = new useState([
    { firstName: "Michael", lastName: "Kuria", email: "What@gamil.com" },
  ]);

  function fetchStudents() {
    getAllStudents()
      .then((res) => res.json())
      .then((students) => {
        setStudents(students);
        console.log(students);
      })
      .catch((err) => {
        err.json().then((res) => {
          console.log(res);
        });
      });
  }

  useEffect(() => {
    console.log("App is starting up");
    fetchStudents();
  }, []);

  return (
    <div className="app">
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">Kirenga Primary School</div>
          <div className="link-container">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/students" className="link">
              Students
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/students"
          element={
            <Students
              fetchStudents={fetchStudents}
              students={students}
              setStudents={setStudents}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
