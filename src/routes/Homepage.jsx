import React, { useState } from "react";
import "./Homepage.css";
import Layout from "./Layout";
import { properties, locations } from "../data/data";
import Carousel from "../components/Carousel";
import RealState from "../components/RealState";
import { IoLogOut } from "react-icons/io5";
import PropertyItem from "../components/PropertyItem";

const Homepage = () => {
  const tabs = [
    "House",
    "Office",
    "Smart home",
    "Apartment",
    "Villa",
    "Banglow",
  ];

  const [newProperties, setNewProperties] = useState(() => {

    return properties.filter((property) => {
      const typeArray = property.type;
      return typeArray && typeArray.includes("new");
    });
  });

  // console.log(newProperties);
  const showTab = (e) =>{
    setNewProperties(
      (prevProperties) => {
        console.log(prevProperties);
        return prevProperties.filter((property) => {
          const typeArray = property.type;
          const cat = property.category;
          return (cat && typeArray) && (typeArray.includes("new") && cat.includes(e));
        }
    )});
  }

  const [pSales, setPsales] = useState(() => {
    return properties.filter((property) => {
      const typeArray = property.type;
      return typeArray && typeArray.includes("sale") && "sale";
    });
    //return properties.filter((property) => property.type === "sale");
  });

  const [nearBys, setNearBys] = useState(() => {
    return locations.filter((location) => location.nearby === 1);
  });

  return (
    <Layout>
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
            {tabs.map((item, index) => (
              <button
                key={index}
                onClick={()=>showTab(item)}
                className="round p-2 shadow-2xl rounded-lg border px-4"
              >
                {item}
              </button>
            ))}
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
          <Carousel layout="two" items={locations} limit={3} />
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
              <PropertyItem properties={pSales} limit={3} />
             
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
