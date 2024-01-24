import React from 'react'
import './Accountoverview.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Integration() {
  return (
    <div className=" integration_con">
    <div className="container">
        <h1>Dashboard</h1>
        <p>Welcome back, John Doe!</p>
        <div className="row main_row">
        
       
            <div className="col-3 pt-4">
          
                <div className="face_div">
                    <h3>Facebook</h3>
                    
                </div>
            </div>

            <div className="col-3 pt-4">
                <div className="face_div">
                    <h3>Instagram</h3>
                   
                </div>
            </div>

            <div className="col-3 pt-4">
          
                <div className="face_div">
                    <h3>Twitter</h3>
                   
                </div>
            </div>
       
        </div>
    </div>
    </div>
  )
}

export default Integration