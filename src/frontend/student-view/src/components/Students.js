import React, { useState } from 'react'



const data = [
    {id: 1, firstName : "Michael", lastName:"Kuria", email: "mchege78@gmail.com"},
    {id: 2, firstName : "Michael", lastName:"Kuria", email: "mchege78@gmail.com"},
    {id: 3, firstName : "Michael", lastName:"Kuria", email: "mchege78@gmail.com"},
    {id: 4, firstName : "Michael", lastName:"Kuria", email: "mchege78@gmail.com"}
]

export default function Students() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function toggleDrawer(e){

        setIsDrawerOpen(!isDrawerOpen);
    }

  return (
    <div className='students'>
        <div className='students-container'>
            <div className='info-container'>
                <div className='students-number'>
                    <span className='students-number-value'>{data.length}</span>
                    <span>students</span>
                </div>
                <div>
                    <button onClick = {toggleDrawer}>Add Student</button>
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

        <div>
            <div className={`drawer ${isDrawerOpen ? 'drawer-active' : ''}`}>

                <div className='drawer-container'>
                    <button onClick = {toggleDrawer} className="drawer-close-btn">Close</button>
                    <div className='drawer-form-container'>
                        <form className='drawer-form'>
                            <label>
                                <span>First Name</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Last Name</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Email</span>
                                <input type="text" />
                            </label>
                            
                            <button type="submit">Submit</button>

                        </form>

                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}
