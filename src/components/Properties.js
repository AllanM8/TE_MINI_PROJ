import React from "react";
import { Link } from "react-router-dom";

const Properties = () => {
  // Sample property list (Replace with API data if needed)
  const properties = [
    { id: 1, title: "Luxury Villa", price: "$2,500,000", image: "/images/villa.jpg" },
    { id: 2, title: "Modern Apartment", price: "$850,000", image: "/images/apartment.jpg" },
  ];

  return (
    <div className="container mt-5">
      <h2>Available Properties</h2>
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4" key={property.id}>
            <div className="card">
              <img src={property.image} className="card-img-top" alt={property.title} />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">{property.price}</p>
                <Link to={`/properties/${property.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
