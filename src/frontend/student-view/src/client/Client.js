import fetch from 'unfetch';

function checkStatus(response){

    if(response.ok){
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(response);

}

export function getAllStudents() {
  return (
    fetch("/kirenga/students")
    .then(checkStatus)
  )
}


export function addNewStudent(student){
    return fetch("/kirenga/students",{
        headers : {
            'Content-Type' : 'application/json'
        },
        method : 'POST',
        body: JSON.stringify(student)
    } ).then(checkStatus)
}


export function deleteStudent(id){
    return fetch(`/kirenga/students/${id}`,
    {method: 'DELETE'}).then(checkStatus)
}

export function editStudent(student){
    return fetch('/kirenga/students', 
    {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(student)
    }).then(checkStatus);
}