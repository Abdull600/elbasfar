import { FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandCss3, TbBrandHtml5, TbBrandNextjs } from 'react-icons/tb';
import { SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';

export default function Skills () {
    return (
      <div id="skills" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold dark:text-gray-300 tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              TOOLS
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl dark:text-gray-300 font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">My</span>
            </span>{' '}
            Everyday Tech Stack
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
            Technologies I use for development
          </p>
        </div>
        <div className="grid gap-8 row-gap-8 grid-cols-2 place-items-center lg:grid-cols-4">
          <div className="sm:text-center">
            <div className="flex items-center justify-center dark:text-pink-600 w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                <TbBrandNextjs />
            </div>
            <h6 className="mb-2 font-semibold text-center leading-5">NextJs</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center dark:text-pink-600 w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                <FaReact />
            </div>
            <h6 className="mb-2 font-semibold text-center leading-5">React</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center dark:text-pink-600 w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                <FaNodeJs />
            </div>
            <h6 className="mb-2 font-semibold text-center leading-5">NodeJs</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center dark:text-pink-600 w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
               <SiTailwindcss />
            </div>
            <h6 className="mb-2 font-semibold text-center leading-5">TailwindCss</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center dark:text-pink-600 w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
               <SiMongodb />
            </div>
            <h6 className="mb-2 font-semibold text-center leading-5">MongoDB</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center dark:text-pink-600 w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
               <SiJavascript />
            </div>
            <h6 className="mb-2 font-semibold text-center leading-5">JavaScript</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl dark:text-pink-600 font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
               <TbBrandHtml5 />
            </div>
            <h6 className="mb-2 font-semibold text-center leading-5">HTML</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full dark:text-pink-600 text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
               <TbBrandCss3 />
            </div>
            <h6 className="mb-2 font-semibold text-center leading-5">CSS</h6>
          </div>
        </div>
      </div>
    );
  };