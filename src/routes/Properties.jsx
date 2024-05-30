import React from "react";
import Layout from "./Layout";
import { properties, locations } from "../data/data";

const Properties = () => {
  return (
    <Layout>
      <div className="bg-gray-300 h-96">ds</div>
      <div className="container mx-auto py-8 text-center "></div>
      <div className="mx-24 title flex items-center mb-6">
        <h1 className="text-3xl font-black">Property Listing</h1>
        <p className="text-gray-400 ms-8">
          There are currently {properties.length} properties.
        </p>
      </div>
      <div className="mx-24 flex">
        <div className="w-4/5">
          <div className="list_content grid gap-4 grid-cols-4">
            {properties.map((property) => (
              <div className="item shadow-lg rounded-lg p-5 ">
                <div className="imgCover w-100 bg-green-300 h-56 rounded-lg mb-4 overflow-hidden">
                  <img src={property.img} alt="" className="w-full h-full" />
                </div>
                <h3 className="text-lg font-bold">{property.name}</h3>
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
            ))}
          </div>
        </div>
        <div className="w-1/5 ms-8">
          <div className="agent pb-8">
            <h3 className="font-semibold text-xl py-3">Agent Details</h3>

            <div className="agentlist">
              <div className="item flex py-4">
                <div className="thumb rounded-full bg-gray-200 w-16 h-16"></div>
                <div className="cont flex flex-col ms-4">
                  Robort fox
                  <strong>(201) 555-0124</strong>
                </div>
              </div>
              <hr />
              <div className="item flex py-4">
                <div className="thumb rounded-full bg-gray-200 w-16 h-16"></div>
                <div className="cont flex flex-col ms-4">
                  Robort fox
                  <strong>(201) 555-0124</strong>
                </div>
              </div>
              <hr />
              <div className="item flex py-4">
                <div className="thumb rounded-full bg-gray-200 w-16 h-16"></div>
                <div className="cont flex flex-col ms-4">
                  Robort fox
                  <strong>(201) 555-0124</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="ftlisting pb-8">
            <h3 className="font-semibold text-xl py-3">Feature Listings</h3>

            <div className="agentlist">
              <div className="item flex py-4">
                <div className="thumb rounded-lg bg-gray-200 w-28 h-20"></div>
                <div className="cont flex flex-col ms-4">
                  Gorgeous Apartment Building
                  <strong>$ 7500</strong>
                </div>
              </div>
              <hr />
              <div className="item flex py-4">
                <div className="thumb rounded-lg bg-gray-200 w-28 h-20"></div>
                <div className="cont flex flex-col ms-4">
                  Gorgeous Apartment Building
                  <strong>$ 7500</strong>
                </div>
              </div>
              <hr />
              <div className="item flex py-4">
                <div className="thumb rounded-lg bg-gray-200 w-28 h-20"></div>
                <div className="cont flex flex-col ms-4">
                  Gorgeous Apartment Building
                  <strong>$ 7500</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
