import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {

  const linkedin = () => {
    window.open('https://www.linkedin.com/in/lucas-barcelo11/', '_blank');
  }

  const github = () => {
    window.open('https://github.com/lucasbarcelo11', '_blank');
  }

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="/fondo.jpeg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-3xl font-bold text-gray-800">Hola, soy Lucas Barceló</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "Desarrollador web",
                1000,
                "FrontEnd",
                1000,
                "JavaScript",
                2000,
                "React",
                2000,
                "HTML, Css",
                2000,
                "Boostrap & Tailwind ",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <FaLinkedin className="cursor-pointer" size={20} onClick={linkedin} target="_blank" />
            <FaGithub className="cursor-pointer" size={20} onClick={github} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
