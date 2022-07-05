import Image from "next/image";

export default function Hero () {

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <div className="inline-block dark:text-gray-100 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  <h1>Abdullah Ahmad</h1>
                </div>
              </div>
              <h4 className="max-w-lg mb-6 dark:text-gray-300 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Frontend Developer, {' '}
                <br className="hidden md:block"/>
                <br className="block md:hidden"/>
                 Coding Coach{' '}
                <span className="inline-block text-deep-purple-accent-400">
                &#38; Technical Writer
                </span>
              </h4>
              <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                I like making interactive things with code. I also write about code and teach coding.
              </p>
            </div>
            <div className="flex flex-col items-start md:flex-row">
              <a
                href="https://drive.google.com/file/d/1a54K2El1W3QjRAPRnJKjvbFWL-F1jzqz/view?usp=sharing"
                className="inline-flex items-center justify-center h-12 px-6 mb-3 font-medium tracking-wide text-white dark:bg-pink-500 transition duration-200 rounded shadow-md md:w-auto md:mr-4 bg-indigo-600 border border-indigo-600 active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
              >
                <span className="mr-3">Download Resume</span>
              </a>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <div  className="object-fill w-full h-56 rounded shadow-lg sm:h-96">
              <Image
                src="/me.jpeg"
                alt="Abdullah Ahmad resume"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };