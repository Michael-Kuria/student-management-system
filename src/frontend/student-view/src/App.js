import "./App.css";
import Home from "./components/Home";
import Students from "./components/Students";
import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  

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
              /*fetchStudents={fetchStudents}
              students={students}
              setStudents={setStudents}*/
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
