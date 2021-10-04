import React from 'react';
import './footer.css'

const Footer = () => {
   return (
      <div className="footer-contant">
         <div className="col-lg-3 col-md-6 footer">
            <h3>Address</h3>
            <p>Ujan Jhagrar Char</p>
            <p>Dantbhanga , Rowmari</p>
            <p>Kurigram</p>
            <p><strong>Phone:</strong>01785524435</p>
            <p><strong>Email:</strong> akhlakuzzalal@gmail.com</p>
         </div>

         <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
               &copy; Copyright <strong><span>Legend</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
               Designed by <strong>Akhlak Uzzalal</strong>
            </div>
         </div>
      </div>
   );
};

export default Footer;