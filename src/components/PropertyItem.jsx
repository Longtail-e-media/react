import React from "react";
import { Link, useParams } from "react-router-dom";

const PropertyItem = ({ properties, limit }) => {
  const sanitize = (text) => text.replaceAll(" ", "-");
  const propertiesToShow = limit ? properties.slice(0, limit) : properties;
  return propertiesToShow.map((property) => {
    return (
      <div key={property.id} className="item shadow-lg rounded-lg p-5 ">
        <div className="imgCover w-100 bg-green-300 h-56 rounded-lg mb-4 overflow-hidden">
          <img src={property.img} alt="" className="w-full h-full" />
        </div>

        <h3 className="text-lg font-bold">
          <Link to={`/property/${sanitize(property.name)}`} property={property}>
            {property.name}{" "}
          </Link>
        </h3>
        <p className="text-xs ">{property.address}</p>
        <div className="py-3 text-2xl font-bold text-yellow-500">
          {property.price}
        </div>
        <div className="amenities flex gap-2 border-b pb-3 h-fit">
          <div className="item">
            {property.beds && (
              <p>
                Beds: <strong>{property.beds}</strong>
              </p>
            )}
          </div>
          <div className="item">
            {property.baths && (
              <p>
                Baths: <strong>{property.baths}</strong>
              </p>
            )}
          </div>
          <div className="item">
            {property.area && (
              <p>
                {" "}
                Sqft: <strong>{property.area}</strong>
              </p>
            )}
          </div>
        </div>
        <div className="lowerbtns flex justify-between pt-3">
          <div className="item">
            + <strong>Compare</strong>
          </div>
          <div className="item"></div>
          <div className="item">3 years ago</div>
        </div>
      </div>
    );
  });
};

export default PropertyItem;
