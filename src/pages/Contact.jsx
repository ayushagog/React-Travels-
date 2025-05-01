import React from 'react';


export default function Contact() {
  return (
    <>
      

      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: '50vh',
          backgroundImage: 'url("https://source.unsplash.com/1600x600/?contact,travel")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center">
          <div className="container">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead">We’d love to hear from you!</p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-5 mb-4">
              <h4 className="fw-bold mb-3">Get in Touch</h4>
              <p className="text-muted">Have questions? Reach out and we’ll get back to you shortly.</p>
              <ul className="list-unstyled">
                <li><strong>Phone:</strong> +91 94143 59539</li>
                <li><strong>Email:</strong> contact@vishnutravel.com</li>
                <li><strong>Address:</strong> B-35 Attrey Farm Gujar Ghati Near Jalmahal,Jaipur</li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <h4 className="fw-bold mb-3">Send a Message</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Write your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
