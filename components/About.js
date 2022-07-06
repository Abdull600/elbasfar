import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function About () {
    return (
      <section className="text-gray-600 body-font" id='about'>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 dark:text-gray-300 text-gray-900">About Me</h1>
            <div className="h-1 w-20 bg-indigo-500 dark:bg-pink-600 rounded"></div>
          </div>
          <div className="text-center mt-5 lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed dark:text-gray-300">
                  Am a Frontend Developer based in Niger State, Nigeria. I transitioned into tech earlier in 2020 from a non-tech background; 
                 I enjoy turning problems and opportunities into simple interface through code. I love to interact with other developers, learn from them, 
                 teach what I learnt and very excited to learn new technologies.
             </p>
            <div className="flex justify-center gap-6">
             <a href='https://github.com/abdull600' className='text-2xl text-indigo-600 dark:text-pink-600 dark:border-gray-50 border-indigo-600 font-bold'>
                <FaGithub />
             </a>
             <a href='https://linkedin.com/in/abdull600' className='text-2xl text-indigo-600 dark:text-pink-600 dark:border-gray-50 border-indigo-600 font-bold'>
                <FaLinkedinIn />
             </a>
             <a href='https://twitter.com/abdull600' className='text-2xl text-indigo-600 dark:text-pink-600 dark:border-gray-50 border-indigo-600 font-bold'>
                <FaTwitter />
             </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
