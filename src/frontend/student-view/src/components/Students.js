import React from 'react'

const data = [
    {id: 1, firstName : "Michael", lastName:"Kuria", email: "mchege78@gmail.com"},
    {id: 2, firstName : "Michael", lastName:"Kuria", email: "mchege78@gmail.com"},
    {id: 3, firstName : "Michael", lastName:"Kuria", email: "mchege78@gmail.com"},
    {id: 4, firstName : "Michael", lastName:"Kuria", email: "mchege78@gmail.com"}
]

export default function Students() {
  return (
    <div>
        <div className='students-container'>
            <div className='info-container'>
                <div className='students-number'>
                    <span className='students-number-value'>{data.length}</span>
                    <span>students</span>
                </div>
                <div>
                    <button>Add Student</button>
                </div>

            </div>
            <div className='table-container'>
                <table>
                    <thead>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {data.map(value => {
                            return(
                                <tr key={value.id}>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.email}</td>
                                    <td>Action</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    </div>
  )
}
