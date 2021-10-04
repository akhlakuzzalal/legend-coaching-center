import React from 'react';

const AboutUs = () => {
   return (
      <div>
         <h2 className="heading py-2 text-light ps-4 text-center">Our Features</h2>
         <div className='row row-cols-lg-2 row-cols-1 m-5'>
            <div className="col-lg-7 col-sm-12">
               <p className="fs-5">Coaching centres offer classes as per subjects and help students to prepare well. Coaching centres offering specialized classes for Joint and Management entrances are already very popular. In the last few years many students have cracked entrance exams successfully after studying at these coaching centres.</p>
               <h3>Our Facilities</h3>
               <ul>
                  <li>Regular class</li>
                  <li>Online Class</li>
                  <li>Extra care</li>
                  <li>Expart Teaching System</li>
                  <li>Expart Teachers For Teach</li>
               </ul>
            </div>
            <div className="col-lg-5 col-sm-12">
               <img className="img-fluid" src={'https://image.shutterstock.com/image-photo/students-listening-female-teacher-classroom-260nw-778983088.jpg'} alt="" />
            </div>
         </div>
      </div>
   );
};

export default AboutUs;