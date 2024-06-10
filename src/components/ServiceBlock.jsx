import React, { useEffect, useState } from "react";
import * as TiIcons from "react-icons/ti";
import * as GiIcons from "react-icons/gi";
import * as PiIcons from "react-icons/pi";
import * as IoIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";
import { services } from "../constants/data";

const ServiceBlock = ({ limit }) => {
  const iconLibraries = {
    Ti: TiIcons,
    Gi: GiIcons,
    Pi: PiIcons,
    Io: IoIcons,
    Tb: TbIcons,
  };

  // getting services from backend
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost/react/backend/api/services.php")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeData = (code) => {
            const func = new Function(code + "return serviceDetails ;");
            return func();
          };
          const actualData = safeData(data);
          setServices(actualData);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const filteredServices = limit ? services.slice(0, limit) : services;

  return (
    <>
      {filteredServices.map((item) => {
        const IconComponent = iconLibraries[item.icon_library]?.[item.icon];
        return (
          <div key={item.id}>
            <div className="p-5">
              <div className="text-5xl text-blue-500">
                <i className="pe-7s-">
                  {/* {typeof item.icon === "function" && <item.icon />} */}
                  {IconComponent && <IconComponent />}
                </i>
              </div>
              <h4 className="uppercase text-base my-3">{item.title}</h4>
              <p className="text-muted">{item.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceBlock;
