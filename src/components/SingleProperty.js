import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SingleProperty = () => {
  const { id } = useParams(); // Get property ID from URL

  // Dummy property data (Replace with API data)
  const property = {
    title: `Property ${id}`,
    price: "$1,500,000",
    location: "New York, USA",
    size: "3,000 sqft",
    bedrooms: 4,
    bathrooms: 3,
    image: "/images/property.jpg",
    description: "A beautiful property with modern design and spacious interiors.",
  };

  return (
    <>
      
      <div className="container mt-5">
        <img src={property.image} alt={property.title} className="img-fluid rounded" />
        <h2 className="mt-4">{property.title}</h2>
        <h4 className="text-primary">{property.price}</h4>
        <p className="text-muted">{property.location}</p>
        <p>{property.description}</p>
      </div>
      
    </>
  );
};

export default SingleProperty;
