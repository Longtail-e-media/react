import React, { useState } from "react";
import Layout from "./Layout";
import { properties, locations } from "../data/data";
import { Link, useParams } from "react-router-dom";
import { agents } from "../data/agents";
import PropertyItem from "../components/PropertyItem";

const Properties = () => {
  
  const [ftProperty, setFtProperty] = useState(() => {
    return properties.filter((property) => {
      const typeArray = property.type;
      return typeArray && typeArray.includes("featured") && "featured";
    });
  });
  const { keyword } = useParams();
  const searchProperties = keyword && properties.filter((property) => {
    const keyArray = keyword.split(" ");
    return keyArray.some((keyword) =>
      property.name.toLowerCase().includes(keyword)
    );
  });

  return (
    <Layout>
      <div className="bg-gray-300 h-96">ds</div>
      <div className="container mx-auto py-8 text-center "></div>
      <div className="mx-24 title flex items-center mb-6">
        <h1 className="text-3xl font-black">Property Listing</h1>
        <p className="text-gray-400 ms-8">
          There are currently
          {keyword ? searchProperties.length : properties.length} properties.
        </p>
      </div>
      <div className="mx-24 flex">
        <div className="w-4/5">
          <div className="list_content grid gap-4 grid-cols-4">
            {keyword ? (
              searchProperties.length ? (
                <PropertyItem properties={searchProperties} />
              ) : (
                "Search not found"
              )
            ) : (
              <PropertyItem properties={properties} />
            )}
          </div>
        </div>
        <div className="w-1/5 ms-8">
          <div className="agent pb-8">
            <h3 className="font-semibold text-xl py-3">Agent Details</h3>

            <div className="agentlist">
              {agents.map((agent) => (
                <>
                  <div key={agent.id} className="item flex py-4">
                    <div className="thumb rounded-full bg-gray-200 w-16 h-16"></div>
                    <div className="cont flex flex-col ms-4">
                      {agent.name}
                      <strong>{agent.tel}</strong>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
          <div className="ftlisting pb-8">
            <h3 className="font-semibold text-xl py-3">Feature Listings</h3>

            <div className="propertyFeaturedList">
              {ftProperty.map((property) => {
                return (
                  <>
                    <div key={property.id} className="item flex py-4">
                      <div className="thumb rounded-lg bg-gray-200 w-28 h-20"></div>
                      <div className="cont flex flex-col ms-4">
                        {property.name}
                        <strong>{property.price}</strong>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
