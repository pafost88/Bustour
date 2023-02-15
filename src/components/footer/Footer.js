import React from 'react'

// import Fotterlogo from '../../assets/images/iescort_logo.svg';

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="img-block">
              {/* <img src={Fotterlogo} className="" alt="Footer Logo" /> */}
            </div> 
          </div>
          <div className="col-6">
            <div className="reserved">
              <h3>© 2022 Iescort. All rights reserved.</h3>
            </div>
          </div>
        </div>
      </div> 
    </footer>
  )
  
}
