import Animation from "./animation"
import Link from "next/link";

export default function Main() {
  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, there
            <br className="inline-block lg:inline-block" />
            Welcome to My Portfolio
          </h1>
          <p className="mb-8 leading-relaxed">포트폴리오 설명란</p>
          <div className="flex justify-center">
            <Link href="projects" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Projects
            </Link>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Etc - 구현 x
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div>
      </div>
  );
}