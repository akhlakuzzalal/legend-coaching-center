import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../images/thumb.jpg'
import img1 from '../../images/20210121collegestudents.jpg'
import img2 from '../../images/Les bourses pour les étudiants étrangers.jpg'
import GetCourse from '../../javaScrip/getCoursees';
import Course from '../Course/Course';
import './home.css'

const Home = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   const courses = GetCourse()
   return (
      <div>
         <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img}
                     alt="First slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img1}
                     alt="Second slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img2}
                     alt="Third slide"
                  />
               </Carousel.Item>
            </Carousel>
         </div>
         <div>
            <h1 className="heading py-2 text-light">Popular Courses</h1>
            <div className="row row-cols-lg-4 row-cols-1 mt-4 ms-1">
               {
                  courses.slice(0, 4).map(course => <Course key={course.key} course={course}></Course>)
               }
            </div>
         </div>
      </div>
   );
};

export default Home;