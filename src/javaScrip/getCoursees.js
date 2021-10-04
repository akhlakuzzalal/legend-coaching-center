import { useEffect, useState } from "react";

const GetCourse = () => {
   const [courses, setCourses] = useState([])

   useEffect(() => {
      fetch('./courseDB.JSON')
         .then(res => res.json())
         .then(data => setCourses(data));
   }, []);
   return courses
};
export default GetCourse
