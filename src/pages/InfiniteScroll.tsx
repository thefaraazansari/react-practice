import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CoinCards from "../components/CoinCards";
import { useNavigate } from "react-router";
import LeftArrowIcon from "../assets/ArrowLeftIcon";

interface Coin {
  id: string;
  symbol: string;
  image: string;
  current_price: number;
}

const InfiniteScroll = () => {
  const navigate = useNavigate();
  const lastCardRef = useRef<HTMLDivElement>(null);
  const [coinsData, setCoinsData] = useState<Coin[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=36&page=${page}&sparkline=false`
      );
      setCoinsData((prev) => [...prev, ...response.data]);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPage((prev) => prev + 1);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "250px",
      }
    );

    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [coinsData]);

  return (
    <div className="flex flex-col p-8">
      <div className="flex items-center gap-10">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex gap-1 items-center font-semibold text-indigo-700 border border-indigo-700 cursor-pointer hover:bg-indigo-700 hover:text-white rounded pr-3 pl-2 py-1 focus-visible:outline-none focus-visible:bg-indigo-700 focus-visible:text-white focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
        >
          <LeftArrowIcon />
          Back
        </button>
        <h1 className="text-6xl font-semibold text-indigo-700">
          Infinite Scroll
        </h1>
      </div>

      <div className="flex flex-wrap gap-8 mt-8">
        {coinsData.map((coin: Coin, index) => (
          <div
            key={`${index}-${coin.id}`}
            ref={index === coinsData.length - 1 ? lastCardRef : null}
          >
            <CoinCards
              name={coin.symbol}
              imageSrc={coin.image}
              currentPrice={coin.current_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
