import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const Course = (props) => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


   const { name, CourseThumb, CourseDetail, CourseFee } = (props.course)
   return (
      <div className="col">
         <Card style={{ width: '22rem' }}>
            <Card.Img className="img-fluid " variant="top" src={CourseThumb} />
            <Card.Body>
               <Card.Title>{name}</Card.Title>
               <Card.Text>
                  <h4>Course Fee: {CourseFee}</h4>
                  <p>{CourseDetail.slice(0, 100)}</p>
               </Card.Text>
               <Button variant="primary" onClick={handleShow}>
                  Start Course
               </Button>

               <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>{name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you're interesting For start <span className="text-success fw-bold"> {name}</span> Course. For Start You Have To Pay First .!!</Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                     <Button variant="primary" onClick={handleClose}>
                        Agree
                     </Button>
                  </Modal.Footer>
               </Modal>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Course;