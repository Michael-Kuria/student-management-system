package com.michael.studentmanagementsystem.student.service;

import com.michael.studentmanagementsystem.student.exception.BadRequestException;
import com.michael.studentmanagementsystem.student.model.Student;
import com.michael.studentmanagementsystem.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents(){

        return studentRepository.findAll();

    }

    public Student getStudent(Long id){

        if(!studentRepository.existsById(id)){
            throw new RuntimeException("Student with id = " + id +" does not exist");
        }
        return studentRepository.findById(id).get();

    }

    public void addStudent(Student std){
        Optional<Student> rst = studentRepository.findByEmail(std.getEmail());

        if(rst.isPresent()){
            throw new BadRequestException("Duplicate email");
        }
        studentRepository.save(std);
    }

    public void updateStudent(Student std){

        studentRepository.save(std);
    }

    public void deleteStudent(Long id){
        Optional<Student> rst = studentRepository.findById(id);

        if(!rst.isPresent()){
            throw new BadRequestException("Student with request id does not exist");
        }
        studentRepository.deleteById(id);
    }


}
