interface CoinCardsProps {
  name: string;
  imageSrc: string;
  currentPrice: number;
}

const CoinCards = ({ name, imageSrc, currentPrice }: CoinCardsProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[200px] text-xl border border-indigo-700 rounded-xl hover:bg-indigo-100 transition-all duration-300 ease-in-out">
      <img src={imageSrc} alt={name} className="w-full h-1/2 object-contain" />
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold">{name}</p>
        <p className="font-semibold">${currentPrice}</p>
      </div>
    </div>
  );
};

export default CoinCards;
