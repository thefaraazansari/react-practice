interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
}: SliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="peer absolute w-full h-2 opacity-0 cursor-pointer z-10"
        />

        {/* Track background */}
        <div className="relative h-2 bg-indigo-200 rounded-full peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500 peer-focus-visible:ring-offset-2">
          {/* Filled track */}
          <div
            className="absolute h-2 bg-indigo-700 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-indigo-700 rounded-full shadow-md pointer-events-none transition-all"
          style={{ left: `calc(${percentage}% - 12px)` }}
        ></div>
      </div>

      {/* Value display */}
      <div className="flex justify-between mt-4 text-indigo-700 font-semibold">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default Slider;
