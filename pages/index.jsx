import { useState, useEffect, useRef } from "react";
import Head from "../components/layout/Head";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// components
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import MobileNav from "../components/layout/MobileNav";

const texts = ["Software Engineer", "Full stack Developer", "Designer"];

// marqee border
// https://codepen.io/Knovour/pen/boJNPN

const variants = {
  enter: () => {
    return {
      y: -20,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

// https://dribbble.com/search/portfolio

export default function Home() {
  const [index, setIndex] = useState(0);
  const textRefs = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <>
      <Head title="Maksim Shaynyuk | Home" />
      <Nav />
      <MobileNav />
      <main>
        <div className="home md:flex flex-col justify-center text-white overflow-auto">
          <div className="mx-8 sm:mx-20">
            <div className="md:container z-40 relative">
              <h2 className="text-6xl md:text-7xl font-bold mt-16 md:mt-0 lg:w-3/4">
                Hi, I'm Maksim Shaynyuk
              </h2>
              <div className="relative text-gray-400 mt-4 text-xl md:text-2xl">
                <span className="mr-1.5"> I am a</span>
                <AnimatePresence>
                  <motion.span
                    style={{ position: "absolute" }}
                    className="font-semibold"
                    variants={variants}
                    key={index}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    ref={(el) => (textRefs.current[1] = el)}
                    transition={{
                      y: { type: "spring", stiffness: 300, damping: 200 },
                      opacity: { duration: 0.5 },
                    }}
                  >
                    {texts[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="mt-4">
                <Link
                  href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <a className="projectsLink capitalize inline-block px-3 py-1.5 border rounded bg-cyan-500 border-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-white">
                    Go to projects <span className="arrowHover">&#8594;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// https://framerbook.com/animation/example-animations/4-repeat/
// https://codesandbox.io/s/5ohg1?file=/src/Example.js:1761-1776
// https://tailblocks.cc/
