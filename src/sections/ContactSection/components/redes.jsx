import { useState } from "react";
import { GitHub, Linkedin } from "../constants/items";

export const RedesCard = () => {
  const [gitActive, setGitActive] = useState(false);
  const [linkActive, setLinkActive] = useState(false);
  const handleClickGit = () => {
    setGitActive(!gitActive);
  };
  const handleClickLink = () => {
    setLinkActive(!linkActive);
  };
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <h2 className="text-xl font-bold Tablet:text-2xl ">
          Sierra-Esperanza Creations LLC{" "}
        </h2>
        <p className="">Software Development.</p>
      </div>
      <div className="flex gap-4">
        <div>
          <button
            onClick={() => handleClickGit()}
            className={`inline-block transition-color duration-300 hover:text-cyan-400  ${
              gitActive && "text-cyan-400 "
            }`}>
            GitHub
          </button>
          {gitActive && (
            <div className="flex flex-col gap-2 mt-1 ">
              {GitHub.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  rel="noopener"
                  target="_blank"
                  className="duration-300 transition-color hover:text-cyan-400 ">
                  {item.name}
                </a>
              ))}{" "}
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleClickLink()}
            className={`inline-block transition-color duration-300 hover:text-cyan-400  ${
              linkActive && "text-cyan-400 "
            }`}>
            LinkedIn
          </button>
          {linkActive && (
            <div className="flex flex-col gap-2 mt-1 ">
              {Linkedin.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  rel="noopener"
                  target="_blank"
                  className="duration-300 transition-color hover:text-cyan-400">
                  {item.name}
                </a>
              ))}{" "}
            </div>
          )}
        </div>
        <a
          href=" https://wa.me/+15616762439"
          target="_blank"
          className="inline-block duration-300 transition-color hover:text-cyan-400 ">
          Whatsapp
        </a>
      </div>
    </div>
  );
};
