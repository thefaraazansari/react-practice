import { useNavigate } from "react-router";
import LeftArrowIcon from "../assets/ArrowLeftIcon";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const DebounceSearch = () => {
  const navigate = useNavigate();
  const [debounceSearch, setDebounceSearch] = useState("");
  const [debounceCount, setDebounceCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCount, setSearchCount] = useState(0);

  const debouncedValue = useDebounce(debounceSearch, 400);

  const fruitsArray = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cantaloupe",
    "Cherry",
    "Cucumber",
    "Custard Apple",
    "Date",
    "Dragon Fruit",
    "Elderberry",
    "Fig",
    "Grapes",
    "Guava",
    "Honeydew",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Lime",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Passion Fruit",
    "Peach",
    "Pear",
    "Plum",
    "Raspberry",
    "Strawberry",
    "Sweet Lime",
    "Tangerine",
    "Watermelon",
    "Zucchini",
  ];

  useEffect(() => {
    if (searchTerm !== "") {
      setSearchCount((prev) => prev + 1);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedValue !== "") {
      setDebounceCount((prev) => prev + 1);
    }
  }, [debouncedValue]);

  return (
    <div className="flex flex-col p-8 gap-6">
      <div className="flex items-center gap-10">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex gap-1 items-center font-semibold text-indigo-700 border border-indigo-700 cursor-pointer hover:bg-indigo-700 hover:text-white rounded pr-3 pl-2 py-1 focus:outline-none focus:bg-indigo-700 focus:text-white focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
        >
          <LeftArrowIcon />
          Back
        </button>
        <h1 className="text-6xl font-semibold text-indigo-700">
          Debounce Search
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <input
            onChange={(e) => setDebounceSearch(e.target.value)}
            className="w-[250px] border border-gray-400 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent"
          />
          <span>
            Search Count:{" "}
            <span className="bg-indigo-500 ml-2 px-3 py-1 rounded-xl text-white">
              {debounceCount}
            </span>
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          {fruitsArray
            .filter((fruit) =>
              fruit.toLowerCase().includes(debouncedValue.toLowerCase())
            )
            .map((fruit) => {
              return (
                <span
                  key={fruit}
                  className="px-3 py-1 text-white bg-indigo-500 rounded-md"
                >
                  {fruit}
                </span>
              );
            })}
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-12">
        <h1 className="text-6xl font-semibold text-indigo-700">
          Traditional Search
        </h1>
        <div className="flex items-center gap-4">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[250px] border border-gray-400 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-indigo-700 focus:border-transparent"
          />
          <span>
            Search Count:{" "}
            <span className="bg-indigo-500 ml-2 px-3 py-1 rounded-xl text-white">
              {searchCount}
            </span>
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          {fruitsArray
            .filter((fruit) =>
              fruit.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((fruit) => {
              return (
                <span
                  key={fruit}
                  className="px-3 py-1 text-white bg-indigo-500 rounded-md"
                >
                  {fruit}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DebounceSearch;
