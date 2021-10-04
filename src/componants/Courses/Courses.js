import React from 'react';
import GetCourse from '../../javaScrip/getCoursees';
import Course from '../Course/Course';

const Courses = () => {
   const courses = GetCourse();
   return (
      <div>
         <h2 className="heading py-2 text-light ps-4 text-center">Our Popular Courses</h2>
         <div className="row row-cols-lg-4 row-cols-1 mt-5 gy-4">
            {
               courses.map(course => <Course course={course}></Course>)
            }
         </div>
      </div>
   );
};

export default Courses;