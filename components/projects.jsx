import Head from "./layout/Head";
import styles from "../styles/Projects.module.scss";

import { firestore } from "../utils/firebaseClient";
import { collection, query, getDocs, orderBy } from "@firebase/firestore";

import Footer from "./layout/Footer";
import ProjectCard from "./ProjectCard";

// webgl blur balls
// https://codepen.io/timseverien/pen/jOqPxZQ

// Moving Gradient with JavaScript
// https://www.youtube.com/watch?v=D6EiRSRhsbQ&ab_channel=InteractiveDeveloper

function Projects({ projects, error }) {
  return (
    <>
      <Head title="Maksim Shaynyuk | Projects" />
      {error || projects.length < 1 ? (
        <p className="text-white p-2 text-sm">
          There was an issue retrieving the project data
          <br />
          Please refresh or try again later
        </p>
      ) : (
        <>
          <div
            className={`${styles.ProjectsBackground} text-white min-h-screen`}
          >
            <div className="2xl:container mx-auto overflow-auto">
              <div className="border-b border-gray-800">
                <div className="my-4 px-6">
                  <div className="">
                    <h2 className="text-xl font-bold">Projects</h2>
                  </div>
                </div>
              </div>
              <div className="2xl:container mx-auto w-full overflow-auto mt-4">
                <div className="h-full p-4 overflow-x-hidden max-w-7xl">
                  {projects.map((p) => (
                    <ProjectCard key={p.id} data={p} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

// This function gets called at build time
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

export default Projects;

// https://codemyui.com/card-based-image-slider-for-travel-websites-with-transition-and-hover-effects/
// https://greensock.com/forums/topic/24852-having-some-trouble-with-rotating-text/
// https://codepen.io/b1mind/pen/XWNpvMK
