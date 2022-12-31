package com.michael.studentmanagementsystem.student.controller;

import com.michael.studentmanagementsystem.student.model.Student;
import com.michael.studentmanagementsystem.student.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("kirenga/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public ResponseEntity<Iterable<Student>> getAllStudents(){
        return ResponseEntity.ok(studentService.getAllStudents());
    }

    @GetMapping(path = "{studentId}")
    public ResponseEntity<Student> getStudent(@PathVariable("studentId") Long id){
        return ResponseEntity.ok(studentService.getStudent(id));
    }


    @PostMapping
    public void addStudent(@Valid @RequestBody Student std){
            studentService.addStudent(std);
    }

    /**
     * To be updated to avoid adding another element instead of updating an existing element
     * @param std
     */
    @PutMapping
    public void updateStudent(@Valid @RequestBody Student std) {
        studentService.updateStudent(std);
    }

    @DeleteMapping(path = "{studentId}")
    public void deleteStudent(@PathVariable("studentId") Long id){
        studentService.deleteStudent(id);
    }


}
