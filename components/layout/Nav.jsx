import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function ChangeBackgroundColor({ children }) {
  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 200],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.6)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 200],
    ["blur(00px)", "blur(10px)"]
  );
  const padding = useTransform(scrollY, [0, 200], ["1.25rem", "0.45rem"]);

  return (
    <motion.div
      className="mx-auto flex flex-wrap flex-col md:flex-row items-center testing"
      style={{ background, padding, backdropFilter }}
    >
      {children}
    </motion.div>
  );
}

const Nav = () => {
  return (
    <header className="body-font hidden md:block fixed top-0 w-full capitalize text-white font-semibold text-xl tracking-wide z-50">
      <ChangeBackgroundColor>
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
      </ChangeBackgroundColor>
    </header>
  );
};

export default Nav;
