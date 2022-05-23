import { useState, useEffect, useRef } from "react";
import Head from "../components/layout/Head";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { firestore } from "../utils/firebaseClient";
import { collection, query, getDocs, orderBy } from "@firebase/firestore";

// components
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import MobileNav from "../components/layout/MobileNav";
// import CopyClipboardButton from "../components/CopyClipboardButton";
import GridSquare from "../components/GridSquare";
import ResumeImage from "../public/Maksim_Shaynyuk_Resume.png";

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

export default function Home({ projects }) {
  const [index, setIndex] = useState(0);
  const textRefs = useRef([]);

  useEffect(() => {
    const a = setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <>
      <Head
        title="Maksim Shaynyuk | Home"
        ogImage="https://mshay.xyz/og-site-main-image.jpg"
      />
      <Nav />
      <MobileNav />
      <section>
        <div className="home md:flex flex-col justify-center text-white overflow-auto">
          <div className="md:container mx-auto z-40 relative px-4 md:px-0">
            <h2 className="text-6xl md:text-7xl font-bold mt-36 md:mt-0 lg:w-3/4">
              Hi, I'm Maksim Shaynyuk
            </h2>
            <div className="relative text-2xl font-bold mt-4 md:text-3xl font-['Cormorant'] tracking-wide">
              <span className="mr-1.5"> I am a</span>
              <AnimatePresence>
                <motion.span
                  style={{ position: "absolute" }}
                  className="text-cyan-500"
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
            <div className="mt-8">
              {/* <Link href="/projects" target="_blank" rel="noopener noreferrer">
                <a className="projectsLink capitalize font-semibold inline-block px-3 py-1.5 border rounded bg-cyan-500 border-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-white">
                  Go to projects <span className="arrowHover">&#8594;</span>
                </a>
              </Link> */}
              <a
                href="mailto: maksimshaynyuk@gmail.com"
                className="projectsLink capitalize font-semibold inline-block px-3 py-1.5 border rounded bg-cyan-500 border-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-white"
              >
                Contact Me <span className="arrowHover">📬</span>
              </a>
              {/* <CopyClipboardButton /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="transform -translate-y-48 md:-translate-y-36">
        <div className="md:container mx-auto px-4 md:px-0">
          <div className="md:w-3/4 mx-auto">
            <div className="text-center mt-12 mb-8 relative">
              <h1 className="text-4xl font-['Cormorant']">Resume</h1>
              <div className="absolute right-0 top-0 h-full flex items-center">
                <a
                  href="/files/Maksim_Shaynyuk_Resume.pdf"
                  className="hidden md:inline-block projectsLink capitalize font-semibold px-3 py-1.5 border rounded bg-cyan-500 border-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-white"
                  download
                >
                  Download <span>🔗</span>
                </a>
                <a
                  href="/files/Maksim_Shaynyuk_Resume.pdf"
                  className="md:hidden capitalize font-semibold tranform translate-y-1"
                  download
                >
                  Download <span>🔗</span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-3/4 mx-auto">
            <Image src={ResumeImage} alt="Maksim's Resume" placeholder="blur" />
          </div>
        </div>
      </section>
      <section className="-mt-48 md:-mt-20">
        <div className="md:container mx-auto px-4 md:px-0">
          <h1 className="text-center text-4xl font-['Cormorant'] my-8">
            Skills
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 md:grid-flow-col gap-4">
            <div className="row-span-1 border border-t-8 border-cyan-500 p-4 md:p-6">
              <h1 className="uppercase text-gray-400 text-sm font-bold tracking-wide">
                languages
              </h1>
              <ul className="mt-3 md:text-3xl md:leading-10 font-light list-disc list-inside">
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>Elixir</li>
              </ul>
            </div>
            <div className="border border-t-8 border-cyan-500 p-4 md:p-6">
              <h1 className="uppercase text-gray-400 text-sm font-bold tracking-wide">
                tools
              </h1>
              <ul className="mt-3 md:text-3xl md:leading-10 font-light list-disc list-inside">
                <li>Javascript</li>
                <li>Jira</li>
                <li>Git</li>
                <li>Cmd / Bash</li>
                <li>Docker</li>
                <li>Aws</li>
              </ul>
            </div>
            <div className="row-span-2 border border-t-8 border-cyan-500 p-4 md:p-6">
              <h1 className="uppercase text-gray-400 text-sm font-bold tracking-wide">
                frontend
              </h1>
              <ul className="mt-3 md:text-3xl md:leading-10 font-light list-disc list-inside">
                <li>React.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwindcss</li>
                <li>Gatsby.js</li>
                <li>Next.js</li>
                <li>Graphql</li>
                <li>Apollo</li>
                <li>Redux</li>
                <li>Axios</li>
              </ul>
            </div>
            <div className="row-span-2 border border-t-8 border-cyan-500 p-4 md:p-6">
              <h1 className="uppercase text-gray-400 text-sm font-bold tracking-wide">
                backend
              </h1>
              <ul className="mt-3 md:text-3xl md:leading-10 font-light list-disc list-inside">
                <li>Django</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Flask, FastApi</li>
                <li>Restful APIs</li>
                <li>Graphql</li>
                <li>MySQL</li>
                <li>Postgres</li>
                <li>Elixir Phoenix</li>
                <li>Redis</li>
                <li>Celery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="md:container mx-auto px-4 md:px-0">
          <h1 className="text-center text-4xl font-['Cormorant'] my-8">Work</h1>
          <div className="boxes grid grid-cols-2 md:grid-cols-4">
            {projects
              .filter((x) => x.type === "work")
              .map((p) => (
                <GridSquare key={p.title} data={p} />
              ))}
          </div>
        </div>
      </section>

      <section className="mt-20 mb-4">
        <div className="md:container mx-auto px-4 md:px-0">
          <h1 className="text-center text-4xl font-['Cormorant'] my-8">
            Projects
          </h1>
          <div className="boxes grid grid-cols-3 md:grid-cols-6">
            {projects
              .filter((x) => x.type === "personal")
              .map((p) => (
                <GridSquare key={p.title} data={p} />
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const projects = [];
  let error = null;
  try {
    const projectsCollection = collection(firestore, "projects");
    const q = query(projectsCollection, orderBy("displayOrder"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    error = "Cannot get data from server";
    console.log(" > Cannot get data from server");
  }

  return {
    props: {
      projects,
      error,
    },
  };
}

// https://framerbook.com/animation/example-animations/4-repeat/
// https://codesandbox.io/s/5ohg1?file=/src/Example.js:1761-1776
// https://tailblocks.cc/
