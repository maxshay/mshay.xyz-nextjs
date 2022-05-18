import React from "react";
import styles from "../styles/Projects.module.scss";

const ProjectCard = ({ data }) => {
  return (
    <div
      className={`${styles.ProjectCard} flex flex-col sm:flex-row h-full card rounded shadow shadow-black py-4 px-1 sm:p-5 mb-5 last:mb-0`}
    >
      <div className="sm:w-60 px-4 sm:px-0">
        <img className="rounded" alt={data.title} src={data.img} />
      </div>
      <div className="px-4 sm:px-8 flex-1 flex flex-col justify-between mt-4 sm:mt-0">
        <div>
          <h1 className="text-4xl font-extralight">{data.title}</h1>
          <p className={`${styles.ProjectCard_Description} mt-2 text-gray-400`}>
            {data.description}
          </p>
          <div className="tags-container mt-4">
            {data.tags.map((t) => (
              <div
                key={`${data.title}_${t}`}
                style={{ textShadow: "0.5px 0.5px 0.5px purple" }}
                className="text-white text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-cyan-500 rounded-full mr-2 mb-2"
              >
                &#35; {t}
              </div>
            ))}
          </div>
        </div>

        <div>
          <a
            href={data.gitLink ?? "#"}
            className={`capitalize mr-3 inline-block mt-4 rounded underline text-white${
              !!data.gitLink
                ? " hover:text-gray-200"
                : " opacity-50 select-none pointer-events-none"
            }`}
            disabled={!data.gitLink}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Code
          </a>
          <a
            href={data.demoLink ?? "#"}
            className={`capitalize mr-3 inline-block mt-4 rounded underline text-white${
              !!data.demoLink
                ? " hover:text-gray-200"
                : " opacity-50 select-none pointer-events-none"
            }`}
            disabled={!data.demoLink}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
