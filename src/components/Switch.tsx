// interface SwitchProps {
//   isChecked: boolean;
//   setIsChecked: (checked: boolean) => void;
//   onChange?: () => void;
// }

// const Switch = ({ isChecked, setIsChecked, onChange }: SwitchProps) => {
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);

//     if (onChange) {
//       onChange();
//     }
//   };

//   return (
//     <>
//       <label className="flex cursor-pointer select-none items-center">
//         <div className="relative">
//           <input
//             type="checkbox"
//             checked={isChecked}
//             onChange={handleCheckboxChange}
//             className="sr-only"
//           />
//           <div
//             className={`block h-8 w-14 rounded-full ${
//               isChecked ? "bg-indigo-700" : "bg-indigo-200"
//             }`}
//           ></div>
//           <div
//             className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
//               isChecked ? "translate-x-full" : ""
//             }`}
//           ></div>
//         </div>
//       </label>
//     </>
//   );
// };

// export default Switch;
interface SwitchProps {
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
  onChange?: () => void;
}

const Switch = ({ isChecked, setIsChecked, onChange }: SwitchProps) => {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (onChange) {
      onChange();
    }
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="peer absolute h-8 w-14 opacity-0 cursor-pointer"
          />
          <div
            className={`block h-8 w-14 rounded-full transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-700 peer-focus-visible:ring-offset-2 ${
              isChecked ? "bg-indigo-700" : "bg-indigo-200"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition pointer-events-none ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default Switch;