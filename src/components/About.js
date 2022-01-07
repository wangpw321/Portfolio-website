import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Puwei.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-4 leading-relaxed">
            I have graduated the University of Winnipeg in December 2021 with aquiring master of science in applied computer science. I obsess over the minor details in software development and am passionate in getting computers to more effectively work on your side by freeing you of the burdens of carrying out repetitive tasks through computer science.
            I am interested in fullstack-development, DevOps and C/C++ development.
          </p>
          <p className="mb-8 leading-relaxed text-purple-400 text-lg font-serif font-bold">
            Research Area: Image Processing, Computer Vison and Parallel Computing
          </p>
          <div className="mb-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Works
            </a>
          </div>
          <div className="flex justify-center ">
            <a
              href="https://twitter.com/palvinww"
              className="inline-flex text-white bg-blue-1000 border-blue-400 border-4 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">Twitter</a>
            <a
              href="https://www.linkedin.com/in/puwei-wang"
              className="ml-4 inline-flex text-white bg-blue-1000 border-blue-400 border-4 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-white rounded text-lg" >Linkedin</a>
          </div>
        </div>
        <div className="lg:max-w-lg md:w-1/2 w-5/6">
          <img
            className="rounded-lg w-96"
            alt="ERRO"
            src="./Avatar.png"
          />

        </div>
      </div>
    </section>
  );
}