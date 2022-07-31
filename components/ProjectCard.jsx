import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <div className="mb-12">
      <h1 className={`uppercase text-lg font-bold tracking-wide`}>
        {data.title}
      </h1>
      <p className={`mt-2 mb-4 text-gray-200`}>{data.description}</p>

      {data.demoLink && (
        <p>
          <span className="capitalize font-bold">demo:</span>{" "}
          <a
            href={data.demoLink}
            className={`mr-3 inline-block text-cyan-500 rounded underline hover:text-cyan-400`}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            {data.demoLink}
          </a>
        </p>
      )}

      {data.gitLink && (
        <p>
          <span className="capitalize font-bold">source:</span>{" "}
          <a
            href={data.gitLink}
            className={`mr-3 inline-block text-cyan-500 rounded underline hover:text-cyan-400`}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            {data.gitLink}
          </a>
        </p>
      )}

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
  );
};

export default ProjectCard;
