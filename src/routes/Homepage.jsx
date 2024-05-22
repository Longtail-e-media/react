import React, { useState } from "react";
import "./Homepage.css";
import Layout from "./Layout";
import { properties, locations } from "../data/data";
import Carousel from "../components/Carousel";
import RealState from "../components/RealState";

const Homepage = () => {
  const [newProperties, setNewProperties] = useState(() => {
    return properties.filter((property) => property.type === "new");
  });

  const [pSales, setPsales] = useState(() => {
    return properties.filter((property) => property.type === "sale");
  });

  const [nearBys, setNearBys] = useState(() => {
    return locations.filter((location) => location.nearby === 1);
  });

  return (
    <Layout>
      <span className="text-red-600">The Same Component has been used for all 3 sliders along with the condition of *new* and *sale*</span>
      <RealState />
      <div className="latest py-12">
        <div className="container mx-auto py-8 text-center ">
          <div className="title">
            <h1 className="text-5xl font-black pb-4">
              Discover the latest real estate
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel lobortis justo
            </p>
          </div>
        </div>
        <div className="carousel ">
          <div className="tablist flex gap-2 justify-center pb-8">
            <button className="round p-2 shadow-2xl rounded-lg border px-4">
              Houses
            </button>
            <button className="round p-2 shadow-2xl rounded-lg border px-4">
              Smart home
            </button>
            <button className="round p-2 shadow-2xl rounded-lg border px-4">
              Apartments
            </button>
            <button className="round p-2 shadow-2xl rounded-lg border px-4">
              Office
            </button>
            <button className="round p-2 shadow-2xl rounded-lg border px-4">
              Villa
            </button>
            <button className="round p-2 shadow-2xl rounded-lg border px-4">
              Bungalow
            </button>
          </div>
          <Carousel layout="one" items={newProperties} limit={5} />
        </div>
      </div>

      <div className="near py-12">
        <div className="container w-2/3 mx-auto">
          <div className="container mx-auto py-8 text-center ">
            <div className="title">
              <h1 className="text-5xl font-black pb-4">
                Find your neighborhood
              </h1>
              <p className="text-gray-400">
                Find your dream apartment with our listing
              </p>
            </div>
          </div>
          <Carousel
            layout="two"
            items={locations}
            limit={3}
            cover_width={1200}
          />
        </div>
      </div>

      <div className="near py-12">
        <div className="container w-2/3 mx-auto">
          <div className="container mx-auto py-8 text-center ">
            <div className="title">
              <h1 className="text-5xl font-black pb-4">Real estate near you</h1>
              <p className="text-gray-400">
                Try our suggestions, here are the apartments that are most
                convenient for you
              </p>
            </div>
          </div>

          <div className="carousel grid grid-cols-3 gap-3 justify-between mt-5">
            {nearBys.map((nearby, index) => (
              <div key={index} className="item flex items-center mb-7">
                <div className="profileimg bg-gray-400 rounded-full w-28 h-28 overflow-hidden"></div>
                <div className="content flex flex-col ps-3">
                  <strong className="text-lg">{nearby.name}</strong>
                  <span className="mb-3 text-sm">{nearby.data}</span>
                  <span className="text-sm font-medium">View all Listing</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sale py-12">
        <div className="container mx-auto py-8 text-center ">
          <div className="title">
            <h1 className="text-5xl font-black pb-4">Property for sale</h1>
            <p className="text-gray-400">
              Find your dream apartment with our listing
            </p>
          </div>
        </div>
        <div className="carousel">
          <div className="container mx-auto w-2/3">
            <div className="list_content flex gap-4 justify-between">
              {pSales.map(
                (pSale, index) =>
                  index <= 3 && (
                    <div
                      key={index}
                      className="item shadow-lg rounded-lg p-5 w-1/3"
                    >
                      <div className="imgCover w-100 bg-green-300 h-56 rounded-lg mb-4 overflow-hidden">
                        <img
                          src={pSale.img}
                          alt=""
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <h3 className="text-lg font-bold">{pSale.name}</h3>
                      <p className="text-xs ">{pSale.address}</p>
                      <div className="py-3 text-2xl font-bold text-yellow-500">
                        {pSale.price}
                      </div>
                      <div className="amenities flex gap-2 border-b pb-3">
                        <div className="item">
                          Beds: <strong>{pSale.beds}</strong>
                        </div>
                        <div className="item">
                          Baths: <strong>{pSale.baths}</strong>
                        </div>
                        <div className="item">
                          Sqft: <strong>{pSale.area}</strong>
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
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="agent py-12">
        <div className="container mx-auto py-10 text-center ">
          <div className="title">
            <h1 className="text-5xl">Meet the Agents</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel lobortis justo
            </p>
          </div>
        </div>
        <div className="carousel">
          <div className="container mx-auto w-2/3">
            <div className="list_content flex gap-4 justify-between">
              <div className="item shadow-lg rounded-lg p-5 w-1/3">
                <div className="imgCover w-100 bg-green-300 h-56 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold">
                  Gorgeous Apartment Building
                </h3>
                <p className="text-xs ">
                  58 Hullbrook Road, Billesley, B13 0LA
                </p>
                <div className="py-3 text-2xl font-bold text-yellow-500">
                  $7,500
                </div>
                <div className="amenities flex gap-2 border-b pb-3">
                  <div className="item">
                    Beds: <strong>4</strong>
                  </div>
                  <div className="item">
                    Baths: <strong>2</strong>
                  </div>
                  <div className="item">
                    Sqft: <strong>1150</strong>
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
              <div className="item shadow-lg rounded-lg p-5 w-1/3">
                <div className="imgCover w-100 bg-green-300 h-56 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold">
                  Gorgeous Apartment Building
                </h3>
                <p className="text-xs ">
                  58 Hullbrook Road, Billesley, B13 0LA
                </p>
                <div className="py-3 text-2xl font-bold text-yellow-500">
                  $7,500
                </div>
                <div className="amenities flex gap-2 border-b pb-3">
                  <div className="item">
                    Beds: <strong>4</strong>
                  </div>
                  <div className="item">
                    Baths: <strong>2</strong>
                  </div>
                  <div className="item">
                    Sqft: <strong>1150</strong>
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
              <div className="item shadow-lg rounded-lg p-5 w-1/3">
                <div className="imgCover w-100 bg-green-300 h-56 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold">
                  Gorgeous Apartment Building
                </h3>
                <p className="text-xs ">
                  58 Hullbrook Road, Billesley, B13 0LA
                </p>
                <div className="py-3 text-2xl font-bold text-yellow-500">
                  $7,500
                </div>
                <div className="amenities flex gap-2 border-b pb-3">
                  <div className="item">
                    Beds: <strong>4</strong>
                  </div>
                  <div className="item">
                    Baths: <strong>2</strong>
                  </div>
                  <div className="item">
                    Sqft: <strong>1150</strong>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
