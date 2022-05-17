import React from 'react';
import './style.css';
import logo from '../images/undraw_mobile_interface_re_1vv9.svg';
import FormData from './FormData';
function Form() {


  return (
      <>
    <div class="header">
    <p className="p_header">Please FullFill all Information</p>
    </div>
      
      <div className="container">
  
        <div className="first">
        <img src={logo} alt="logobg" height="500px" />
        </div>

    <div className="second">
    <p>Fill Your Information</p>
       <form>
            <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="name" />
                
            </div>
            
            <div className="form-group">
                <label htmlFor="Phone">Phone number</label>
                <input type="number" className="form-control" id="phone" />
            </div>
            <div className="form-group">
                <label htmlFor="Phone">National ID</label>
                <input type="id" className="form-control" id="id" />
            </div>
            
            
            
            </form>

                    </div>
                    
        <div className="capture">
        <FormData />
        </div>
    </div>
    </>
  )
}

export default Form