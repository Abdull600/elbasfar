import Image from "next/image";
import Link from "next/link";


export default function Projects () {

    return (
        <section className="text-gray-600 body-font" id="projects">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 dark:text-gray-300 text-gray-900">Projects</h1>
            <div className="h-1 w-20 bg-indigo-500 dark:bg-pink-600 rounded"></div>
        </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <div  className="object-cover w-full h-64">
             <Image
              src="/shago.jpeg"
              width={500}
              height={400}
              alt="Shago App"
            />
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              >
                Fullstack
              </span>
              <span className="text-gray-600">— Ecommerce  App</span>
            </p>
            <span
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Shago App
            </span>
            <div className="flex  items-center justify-between mt-6">
                <ul className="flex flex-wrap gap-1 space-x-1">
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        NextJs
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        MongoDB
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        SSR
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                       Context API
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        TailwindCss
                    </li>
                </ul>
            </div>
            <div className="flex gap-5 justify-between mt-3">
                <Link
                href="https://shago-app.vercel.app/"
                
                className="inline-flex items-center hover:text-pink-600 font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                 Live
                </Link>
                <Link
                href="https://github.com/Abdull600/Shago-app"
                
                className="inline-flex items-center hover:text-pink-600 font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                 Github
                </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <div className="object-cover w-full h-64">
            <Image
              src="/slush.jpeg"
              width={500}
              height={400}
              alt="Slushcoins landing page"
            />
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span
               
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
               
               
              >
                React 
              </span>
              <span className="text-gray-600">— Landing Page</span>
            </p>
            <span
             
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              SlushCoin App
            </span>
            <div className="flex  items-center justify-between mt-6">
                <ul className="flex flex-wrap gap-1 space-x-1">
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        ReactJs
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        TailwindCss
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        Responsive
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        Framer Motion
                    </li>
                </ul>
            </div>
            <div className="flex gap-5 justify-between mt-3">
                <Link
                href="https://slushcoins-app.vercel.app/"
                
                className="inline-flex items-center hover:text-pink-600 font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                 Live
                </Link>
                <Link
                href="https://github.com/Abdull600/slushcoins-app"
               
                className="inline-flex items-center hover:text-pink-600 font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                 Github
                </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <div className="object-cover w-full h-64">
            <Image
              src="/hadith.jpeg"
              width={500}
              height={400}
              alt="Hadith search engine"
            />
          </div>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span
               
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                
              >
                NextJs 
              </span>
              <span className="text-gray-600">— Search Engine</span>
            </p>
            <span
             
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Hadith Search App
            </span>
            <div className="flex  items-center justify-between mt-6">
                <ul className="flex flex-wrap gap-1 space-x-1">
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        NextJs
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        Dorar.net API
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        SSR
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        Word Search
                    </li>
                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                        Arabic Language
                    </li>
                </ul>
            </div>

            <div className="flex gap-5 justify-between mt-3">
                <Link
                href="https://hadith-search-engine.vercel.app/"
                
                className="inline-flex items-center font-semibold transition-colors hover:text-pink-600 duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                 Live
                </Link>
                <Link
                href="https://github.com/Abdull600/hadith-search-engine"
                
                className="inline-flex items-center font-semibold transition-colors duration-200 hover:text-pink-600 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                 Github
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
    )
}
