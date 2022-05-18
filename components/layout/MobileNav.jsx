import React, { useState } from "react";

import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className="absolute w-full top-0 flex justify-end z-50">
        <button
          className="absolute top-0 right-0 m-6"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      <aside
        id="nav"
        style={{ backgroundColor: "rgb(15, 15, 15)" }}
        className={`w-full fixed z-50 h-full transform transition-transform ease-in duration-150 font-medium uppercase${
          open ? "" : " translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-end p-8 text-white">
          <nav className="text-lg">
            <a
              href="https://github.com/maxshay"
              target="_blank"
              referrerPolicy="no-referrer"
              className="block text-3xl text-right font-bold tracking-wide cursor-pointer my-10"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/maksim-shaynyuk"
              target="_blank"
              referrerPolicy="no-referrer"
              className="block text-3xl text-right font-bold tracking-wide cursor-pointer my-10"
            >
              linkedin
            </a>
            <button
              className="w-full flex justify-end text-right p-1 mt-10"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </button>
          </nav>
        </div>
      </aside>
    </div>
  );
};
