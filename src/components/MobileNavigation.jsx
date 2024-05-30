import React from "react";
// import { navigation } from "./Header";
import { mobileNavigation } from "../constants/navigation";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <>
      <section className="lg:hidden w-full h-14 bg-black bg-opacity-75 fixed bottom-0 z-40">
        <div className="flex justify-between items-center h-14 text-neutral-400">
          {mobileNavigation.map((nav, index) => {
            return (
              <NavLink
                key={index}
                to={nav.href}
                className={({ isActive }) =>
                  `px-3 flex items-center justify-center flex-col ${
                    isActive && `text-white`
                  }`
                }
              >
                <div className="text-2xl">{nav.icon}</div>
                <p>{nav.label}</p>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MobileNavigation;
