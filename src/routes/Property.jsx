import React, { useState } from "react";
import Layout from "./Layout";
import { properties, locations } from "../data/data";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { galleries } from "../data/galleries";
import { agents } from "../data/agents";

import { CiCalendar, CiMap } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { LiaBathSolid, LiaTapeSolid } from "react-icons/lia";
import { FaRegCheckCircle } from "react-icons/fa";

const Property = () => {
  const { id } = useParams();
  const nameRealform = id.replaceAll("-", " ");
  const property = properties.find(
    (property) => property.name === nameRealform
  );
  const gallery = galleries.filter(
    (gallery) => gallery.propertyId == property.id
  );

  const [ftProperty, setFtProperty] = useState(() => {
    return properties.filter((property) => {
      const typeArray = property.type;
      return typeArray && typeArray.includes("featured") && "featured";
    });
  });

  return (
    <Layout>
      <ScrollToTop />
      <div className="container mx-auto pb-4 ">
        <p className="text-gray-400 py-4 ">
          home &gt; properties &gt; {property.name}
        </p>
       <hr />
      </div>
      
      <div className="mx-24 title flex flex-col gap-3 mb-6">
        <h1 className="text-3xl font-black">{property.name}</h1>
        <div className="text-gray-400  flex">
          <div className="flex">
            <CiMap className="text-2xl" /> {property.address}
          </div>
          <div className="flex ms-10">
            <CiCalendar className="text-2xl" /> 2 years ago
          </div>
        </div>
        <div className="text-gray-400 flex gap-6">
          <div className="flex">
            <IoBedOutline className="text-2xl" />
            {property.beds && `Beds: ${property.beds}`}
          </div>
          <div className="flex">
            <LuBath className="text-2xl" />
            {property.baths && `Baths: ${property.baths}`}
          </div>
          <div className="flex">
            <LiaTapeSolid className="text-2xl" />
            {property.area && `Sqft: ${property.area}`}
          </div>
        </div>
      </div>
      <div className="images grid-cols-2 grid gap-3 p-3">
        <div className="h-full bg-slate-300" style={{ height: "800px" }}>
          <img
            src={property.img}
            alt={property.name}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-full grid grid-row-2 gap-3">
          <div className="h-full bg-slate-300" style={{ height: "394px" }}>
            {gallery[0] && (
              <img
                src={gallery[0].img}
                alt={gallery[0].title}
                className="object-cover h-full w-full"
              />
            )}
          </div>
          <div className="h-full grid grid-cols-2 gap-3">
            <div className="h-auto bg-slate-300" style={{ height: "394px" }}>
              {gallery[1] && (
                <img
                  src={gallery[1].img}
                  alt={gallery[1].title}
                  className="object-cover h-full w-full"
                />
              )}
            </div>
            <div className="h-auto bg-slate-300">
              {gallery[2] && (
                <img
                  src={gallery[2].img}
                  alt={gallery[2].title}
                  className="object-cover h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex py-8">
        <div className="w-3/4 pe-8">
          <div className="shadow-lg border p-8 mb-8">
            <h2 className="text-2xl font-bold">Overview</h2>
            <hr className="my-4" />
            <div class="agentlist grid grid-cols-4">
              <div class="item flex py-4">
                <div class="thumb rounded-sm bg-gray-200 w-16 h-16 p-3">
                  <IoBedOutline className="w-full h-full" />
                </div>
                <div class="cont flex flex-col ms-4">
                  {property.beds && (
                    <div>
                      Beds <br />
                      <strong>{property.beds}</strong>
                    </div>
                  )}
                </div>
              </div>
              <div class="item flex py-4">
                <div class="thumb rounded-sm bg-gray-200 w-16 h-16 p-3">
                  <LiaBathSolid className="w-full h-full" />
                </div>
                <div class="cont flex flex-col ms-4">
                  {property.baths && (
                    <div>
                      Baths <br />
                      <strong>{property.baths}</strong>
                    </div>
                  )}
                </div>
              </div>
              <div class="item flex py-4">
                <div class="thumb rounded-sm bg-gray-200 w-16 h-16 p-3">
                  <IoBedOutline className="w-full h-full" />
                </div>
                <div class="cont flex flex-col ms-4">
                  {property.beds && (
                    <div>
                      Beds <br />
                      <strong>{property.beds}</strong>
                    </div>
                  )}
                </div>
              </div>
              <div class="item flex py-4">
                <div class="thumb rounded-sm bg-gray-200 w-16 h-16"></div>
                <div class="cont flex flex-col ms-4">
                  {property.area && (
                    <div>
                      Size <br />
                      <strong>{property.area} sqft</strong>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg border p-8 mb-8">
            <h2 className="text-2xl font-bold">Property Detail</h2>
            <hr className="my-4" />
            <div class="agentlist ">
              {property.desc && <div>{property.desc}</div>}
            </div>
          </div>
          <div className="shadow-lg border p-8 mb-8">
            <h2 className="text-2xl font-bold">Featured</h2>
            <hr className="my-4" />
            <div class="agentlist grid grid-cols-1 md:grid-cols-2">
              <div className="outcome">
                <h2 className="font-bold">Outdoor features</h2>

                <div class="agentlist grid grid-cols-1 md:grid-cols-2 py-2">
                  <div class="item flex items-center py-2">
                    <FaRegCheckCircle className="text-lg" />
                    <div class=" ms-4">Swimming pool</div>
                  </div>
                  <div class="item flex items-center py-2">
                    <FaRegCheckCircle className="text-lg" />
                    <div class=" ms-4">Tennis Court</div>
                  </div>
                  <div class="item flex items-center py-2">
                    <FaRegCheckCircle className="text-lg" />
                    <div class=" ms-4">Balcony</div>
                  </div>
                  <div class="item flex items-center py-2">
                    <FaRegCheckCircle className="text-lg" />
                    <div class=" ms-4">Garage</div>
                  </div>
                  
                </div>
              </div>
              <div className="income">
                <h2 className="font-bold">Indoor features</h2>
                <div class="agentlist grid grid-cols-1 md:grid-cols-2 py-2">
                <div class="item flex items-center py-2">
                    <FaRegCheckCircle className="text-lg" />
                    <div class=" ms-4">Swimming pool</div>
                  </div>
                  <div class="item flex items-center py-2">
                    <FaRegCheckCircle className="text-lg" />
                    <div class=" ms-4">Tennis Court</div>
                  </div>
                  <div class="item flex items-center py-2">
                    <FaRegCheckCircle className="text-lg" />
                    <div class=" ms-4">Balcony</div>
                  </div>
                  <div class="item flex items-center py-2">
                    <FaRegCheckCircle className="text-lg" />
                    <div class=" ms-4">Garage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 ms-8">
          <div className="agent pb-8">
            <h3 className="font-semibold text-xl py-3">Agent Details</h3>

            <div className="agentlist">
              {agents.map((agent) => (
                <>
                  <div className="item flex py-4">
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

            <div className="agentlist">
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

export default Property;
