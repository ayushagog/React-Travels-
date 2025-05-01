import React from 'react';


export default function About() {
  return (
    <>
      

      {/* Hero Banner */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: '50vh',
          backgroundImage: 'url("https://source.unsplash.com/1600x600/?travel,team")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center">
          <div className="container">
            <h1 className="display-4 fw-bold">About VishnuTravel</h1>
            <p className="lead">Your trusted partner in discovering the world</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Who We Are</h2>
          <p className="text-muted text-center mb-5">
            VishnuTravel is a travel agency dedicated to crafting unforgettable travel experiences.
            From exotic destinations to cultural tours, we handle everything so you can focus on
            enjoying your trip.
          </p>

          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <h4 className="fw-bold">Our Mission</h4>
              <p className="text-muted">
                To make travel affordable and accessible to everyone while maintaining top-tier service,
                safety, and support.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h4 className="fw-bold">Our Vision</h4>
              <p className="text-muted">
                To become India’s most trusted and innovative travel brand by offering exceptional
                experiences and personalized journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

 
    </>
  );
}
