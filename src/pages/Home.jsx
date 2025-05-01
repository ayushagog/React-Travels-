import React from 'react';
import DestinationCard from '../component/DestinationCard';

export default function Home() {
  return (
    <>


      {/* Hero Section */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          height: '90vh',
          backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/02/56/53/38/1000_F_256533834_Chxhh4CkOk6YVnvAKGPSN3jc40rSTFaV.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container text-center mycontainer">
          <h1 className="display-4 fw-bold">Explore the World with VishnuTravel</h1>
          <p className="lead mb-4">Discover amazing places at exclusive deals!</p>
          <a href="#destinations" className="btn btn-primary btn-lg">View Packages</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Why Travel with Us?</h2>
          <p className="text-muted mb-0">
            At VishnuTravel, we curate unforgettable experiences tailored to your taste. Whether you're looking for a peaceful getaway, an exciting adventure, or cultural immersion — we've got you covered.
          </p>
        </div>
      </section>

      {/* Destination Cards
      <section id="destinations">
        <Destinations />
      </section> */}

      {/* Contact Teaser */}
      <section className="py-5 text-white" style={{ backgroundColor: '#007bff' }}>
        <div className="container text-center">
          <h2 className="fw-bold">Have Questions?</h2>
          <p>Contact our travel experts and start planning your next journey.</p>
          <a href="/contact" className="btn btn-outline-light mt-2">Contact Us</a>
        </div>
      </section>

    
    </>
  );
}
