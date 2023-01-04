import React, { useRef, useState, useEffect } from "react";
import { addNewStudent, deleteStudent, editStudent, getAllStudents} from "../client/Client";
import DeleteForeverRounded from "@mui/icons-material/DeleteForeverRounded";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function Students() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState();
  const [students, setStudents] =  useState([]);
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();

  

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


  function updateForm(std){
   if(std != null){
      firstName.current.value = std.firstName
      lastName.current.value = std.lastName
      email.current.value = std.email
    }else{
    firstName.current.value = null
      lastName.current.value = null
      email.current.value = null
        

    }
  }

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  function handleOnCloseDrawer(e){
    toggleDrawer();
    updateForm(null);
    if(studentToEdit != null) setStudentToEdit(null);

  }

  function handleAddStudent(e){
    toggleDrawer()

  }

  function addStudent(e) {
    e.preventDefault();
    const std = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
    };
    updateForm(null);
    addNewStudent(std)
      .then(() => {
        console.log(std + " has been added");
        fetchStudents();
      })
      .catch((err) => {
        err.json().then((res) => {
          console.log(res);
        });
      });
  }

  function handleDeleteStudent(id, e) {
    e.preventDefault();
    deleteStudent(id)
      .then(() => {
        console.log("Student with id " + id + " has been deleted");
        fetchStudents();
      })
      .catch((err) => {
        err.json().then((res) => {
          console.log(res);
        });
      });
  }

  function handleEditStudent(std, e) {
    setStudentToEdit(std);
    updateForm(std);
    toggleDrawer();
  }

  function handleUpdateStudent(e){
    e.preventDefault();
    const std1 = {
        id: studentToEdit.id,
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
      };
      editStudent(std1)
        .then(() => {
          console.log(std1 + " has been edited");
          fetchStudents();
          setStudentToEdit(null);
          updateForm(null);
          toggleDrawer();
        })
        .catch((err) => {
          err.json().then((res) => {
            console.log(res);
            setStudentToEdit(null);
            updateForm(null);
            toggleDrawer();
          });
        });
  }

  return (
    <div className="students">
      <div className="students-container">
        <div className="info-container">
          <div className="students-number">
            <span className="students-number-value">{students.length}</span>
            <span>students</span>
          </div>
          <div>
            <button onClick={handleAddStudent} className="add-student-btn">
              <PersonAddIcon /> Student
            </button>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Action</th>
            </thead>
            <tbody>
              {students.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                    <td>{value.email}</td>
                    <td>
                      <div className="btn-container">
                        <button
                          className="table-btn"
                          onClick={(e) => handleDeleteStudent(value.id, e)}
                        >
                          <DeleteForeverRounded />
                        </button>
                        <button
                          className="table-btn"
                          onClick={(e) => handleEditStudent(value, e)}
                        >
                          <BorderColorIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className={`drawer ${isDrawerOpen ? "drawer-active" : ""}`}>
          <div className="drawer-container">
            <button onClick={handleOnCloseDrawer} className="drawer-close-btn">
              <CloseIcon />
            </button>
            <div className="drawer-form-container">
              <form className="drawer-form">
                <label>
                  <span>First Name</span>
                  <input type="text" ref={firstName} />
                </label>
                <label>
                  <span>Last Name</span>
                  <input type="text" ref={lastName} />
                </label>
                <label>
                  <span>Email</span>
                  <input type="text" ref={email} />
                </label>
                <div>
                    {studentToEdit == null? 
                    <button type="submit" onClick={addStudent}>
                        Submit
                  </button> : 
                  <button type='submit' onClick={handleUpdateStudent}>
                    update
                  </button>
                }
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
