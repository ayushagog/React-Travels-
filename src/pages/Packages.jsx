import React from 'react';

const packages = [
  {
    title: 'Amber Fort',
    image: 'https://www.shutterstock.com/image-photo/amazing-view-decorated-gateway-amber-600nw-2389784209.jpg',
    price: '₹9,999',
    duration: '5 Days / 4 Nights',
    features: ['Eiffel Tower visit', 'Seine River Cruise', '3-star Hotel Stay'],
  },
  {
    title: 'Pushkar',
    image: 'data:image/jpeg;base64,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',
    price: '₹14,999',
    duration: '3 Days / 2 Nights',
    features: ['Beach Resort', 'Water Sports', 'Local Sightseeing'],
  },
  {
    title: 'Ranthambore',
    image: 'https://ranthambhorenationalpark.in/images/easyblog_articles/164/b2ap3_large_Ranthambore-National-Park-entry-gate.jpg',
    price: '₹15,999',
    duration: '6 Days / 5 Nights',
    features: ['Jungfrau Tour', 'Lake Lucerne', '4-star Hotel Stay'],
  },
];

export default function Packages() {
  return (
    <>


      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: '50vh',
          backgroundImage: 'url("https://source.unsplash.com/1600x600/?travel,adventure")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center">
          <div className="container">
            <h1 className="display-4 fw-bold">Our Tour Packages</h1>
            <p className="lead">Find your perfect trip with VishnuTravel</p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Featured Packages</h2>
          <div className="row">
            {packages.map((pkg, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow">
                  <img src={pkg.image} className="card-img-top" alt={pkg.title} />
                  <div className="card-body">
                    <h5 className="card-title">{pkg.title}</h5>
                    <p className="card-text"><strong>Duration:</strong> {pkg.duration}</p>
                    <ul className="list-unstyled">
                      {pkg.features.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="fw-bold">{pkg.price}</span>
                    <button className="btn btn-sm btn-primary">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
