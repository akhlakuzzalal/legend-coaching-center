import React, { useEffect, useState } from 'react';
import Teacher from '../teacher/Teacher';

const Teachers = () => {
   const [teachers, setTeachers] = useState([]);

   useEffect(() => {
      fetch('./teacherDb.JSON')
         .then(res => res.json())
         .then(data => setTeachers(data));
   }, [])
   return (
      <div>
         <h2 className="heading py-2 text-light ps-4 text-center">Our Respective Teachers</h2>
         <div className="row row-cols-lg-2 row-cols-1 g-2 mb-3 ms-3 me-3">
            {
               teachers.map(teacher => <Teacher teacher={teacher}></Teacher>)
            }
         </div>
      </div>
   );
};

export default Teachers;