import React from 'react';
import { Button } from 'react-bootstrap';
import './teacher.css'

const Teacher = (props) => {
   const { img, name, designation, email } = props.teacher;
   return (
      <div className="col teacher">
         <div className="d-lg-flex align-items-center ms-5 my-5">
            <div className="mb-2">
               <img height="200px" width="200px" className="rounded-circle" src={img} alt="" />
            </div>
            <div className="ms-4">
               <h4 className="teacher-name">Name: {name}</h4>
               <p><strong>Designation</strong>: {designation}</p>
               <p><strong>Email</strong>: {email}</p>
               <Button>Send Mail</Button>
            </div>
         </div>
      </div>
   );
};

export default Teacher;