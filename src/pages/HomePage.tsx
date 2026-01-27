import { Link } from "react-router";

const HomePage = () => {
  const cardsData = [
    {
      title: "Infinite Scroll",
      route: "/infinite-scroll",
    },
    {
      title: "Debounce Search",
      route: "/debounce-search",
    },
    {
      title: "Card Gradient",
      route: "/card-gradient",
    },
    {
      title: "Password Generator",
      route: "/password-generator",
    },
    {
      title: "Infinite Scroll",
      route: "/infinite-scroll",
    },
    {
      title: "Infinite Scroll",
      route: "/infinite-scroll",
    },
  ];

  return (
    <div className="grid gap-8 p-8 auto-rows-max grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      {cardsData.map((card, index) => (
        <Link
          key={index}
          to={card.route}
          className="flex items-end justify-start h-[125px] w-[200px] p-2 text-2xl cursor-pointer border border-indigo-700 rounded-2xl text-indigo-700 hover:bg-indigo-700 hover:text-white focus-visible:bg-indigo-700 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-indigo-700 focus-visible:outline-offset-2 transition duration-300"
        >
          {card.title}
        </Link>
      ))}
    </div>
  );
};
export default HomePage;
