import pageNotFound from "../assets/error.webp";

const PageNotFound = () => {
  return (
    <div className="mt-[150px] flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2 -mt-[20px]">
        <h1 className="font-semibold text-indigo-700 text-8xl">404</h1>
        <p className="text-neutral-700 text-4xl">Page Not Found</p>
        <p className="text-neutral-700">
          The page you are looking for does not exist!
        </p>
        <a
          href="/"
          rel="noopener noreferrer"
          className="mt-2 px-4 py-2 rounded-lg border border-indigo-700 font-medium text-indigo-700 hover:bg-indigo-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 focus-visible:bg-indigo-700 focus-visible:text-white"
        >
          Go Back Home
        </a>
      </div>
      <img
        alt=""
        src={pageNotFound}
        className="h-auto w-[500px] object-cover"
      />
    </div>
  );
};

export default PageNotFound;
