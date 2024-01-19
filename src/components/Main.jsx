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

  const download = ('/LucasBarceloCV.pdf')


  

  return (
    <div id="main" >
      <img
        className=" w-full h-screen object-cover object-left scale-x-[-1]"
        src="/fondo.jpeg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30 dark:bg-black dark:opacity-90 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-3xl font-bold text-gray-800 dark:text-gray-200">Hola, soy Lucas Barceló</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 dark:text-gray-200">
            <TypeAnimation
              sequence={[
                "Desarrollador web",
                1000,
                "Full-Stack",
                1000,
                "JavaScript",
                1000,
                "React",
                1000,
                "HTML 5, Css3",
                1000,
                "Boostrap & Tailwind ",
                1000,
                "Node js ",
                1000,
                "Express ",
                1000,
                "PostgreSQL",
                1000
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[100px] w-full dark:text-gray-200">
            <FaLinkedin className="cursor-pointer" size={30} onClick={linkedin} target="_blank" />
            <FaGithub className="cursor-pointer" size={30} onClick={github} />
          </div>
          <div className="pt-10 flex justify-center gap-3">
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><a download={download} href={download}>Curriculum</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
