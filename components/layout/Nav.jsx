import React from "react";

const Nav = () => {
  return (
    <header className="bg-transparent body-font hidden md:block fixed top-0 w-full capitalize text-white font-semibold text-xl tracking-wide z-50">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            href="https://github.com/maxshay"
            target="_blank"
            referrerPolicy="no-referrer"
            className="mx-4 my-2 cursor-pointer hover:underline underline-offset-1"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/maksim-shaynyuk"
            target="_blank"
            referrerPolicy="no-referrer"
            className="mx-4 my-2 cursor-pointer hover:underline underline-offset-1"
          >
            linkedIn
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
