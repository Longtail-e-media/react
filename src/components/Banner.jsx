import React from "react";
import { CiSearch } from "react-icons/ci";
const Banner = () => {
  return (
    <div>
      <div className="inner_banner h-[700px] bg-slate-400 grid justify-items-center items-center">
        <div className="grid grid-rows-1 grid-cols-2    gap-x-5 w-3/4 ">
          <div>
            <h2 className="text-6xl font-bold text-white leading-tight">
              Choose your home for future life
            </h2>
            <p className="font-semibold mt-4 text-white">
              Find a variety of properties that suit you very easily, forget all
              difficulties in finding a residence for you
            </p>
          </div>

          <div className="form ps-10">
            <div className="form_tab">
              <ul className="flex">
                <li className=" bg-defaultcolor px-11 py-4 rounded-tl-lg text-white">
                  Rent
                </li>
                <li className="bg-[#FFF5E0] px-11 py-4 rounded-tr-lg">Buy</li>
              </ul>
              <div className="form-bg bg-slate-300 px-5 rounded-lg rounded-tl-none">
                <form action="" className="flex flex-col pt-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Type Keyword"
                    className="h-16 rounded-lg ps-3"
                  />
                  <select name="" id="" className="mt-3 h-16 rounded-lg ps-3">
                    <option value="">Property type</option>
                  </select>
                  <select name="" id="" className="mt-3 h-16 rounded-lg ps-3">
                    <option value="">Location</option>
                  </select>
                  <div className="two_btn flex justify-between my-4 gap-5">
                    <button className="text-center bg-[#FFF5E0] grow shrink-0 rounded-lg px-9">
                      Filters
                    </button>
                    <button
                      href=""
                      className=" bg-defaultcolor text-white rounded-lg text-center grow flex justify-center gap-2 items-center h-16"
                    >
                      Search Now <CiSearch />
                    </button>
                  </div>
                </form>
              </div>
              <div className="items_icons mt-5">
                <ul className="flex justify-between">
                  <li>Houses</li>
                  <li>Villas</li>
                  <li>Office</li>
                  <li>Apartments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
