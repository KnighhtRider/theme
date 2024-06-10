import React from 'react'
import '../styles/amenities.css'

function Amenities() {
  return (
    <div className="amenities-tours">
      <div className="background-overlay">
        <div className="container">
          <div className="column left">
            <div className="heading">
              <h2>WORLD CLASS AMENITIES</h2>
              <span className="line"></span>
              <p>Unlock a World of Possibilities at Chandak Chembur and Elevate Your Lifestyle to Unprecedented Levels of Luxury. Reserve Your Apartment Now and Embark on A Journey of Refined Living Like Never Before!</p>
            </div>
            <div className="carousel">
              <div className="item"><img src="https://24estate.in/chandakchembureast/wp-content/uploads/am1.webp" alt="amenity" /></div>
              {/* Repeat the above block for each amenity image */}
            </div>
            <div className="button-container">
              <button className="btn">Request For Full Gallery</button>
            </div>
          </div>
          
          <div className="column right">
            <div className="heading">
              <h2>VIRTUAL DRONE TOURS</h2>
              <span className="line"></span>
            </div>
            <div className="row">
              <div className="col">
                <div className="sub-heading">
                  <h3>DRONE TOUR</h3>
                  <span className="line"></span>
                </div>
                <div className="icon"><img src="https://24estate.in/chandakchembureast/wp-content/uploads/drone-tour-1.webp" alt="drone tour" /></div>
                <div className="icon"><img src="https://24estate.in/chandakchembureast/wp-content/uploads/new-2.png" alt="drone tour" /></div>
                <div className="button-container">
                  <button className="btn">Request For Tour</button>
                </div>
              </div>
              <div className="col">
                <div className="sub-heading">
                  <h3>FLAT TOUR</h3>
                  <span className="line"></span>
                </div>
                <div className="icon"><img src="https://24estate.in/chandakchembureast/wp-content/uploads/am7.webp" alt="flat tour" /></div>
                <div className="button-container">
                  <button className="btn">Request For Tour</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amenities
