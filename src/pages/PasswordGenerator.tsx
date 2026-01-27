import { useNavigate } from "react-router";
import LeftArrowIcon from "../assets/ArrowLeftIcon";
import Switch from "../components/Switch";
import { useState } from "react";
import Slider from "../components/Slider";

interface ToggleCardProps {
  sign: string;
  title: string;
  description: string;
  isEnabled: boolean;
  setIsEnabled: (value: boolean) => void;
}

function ToggleCard({
  sign,
  title,
  description,
  isEnabled,
  setIsEnabled,
}: ToggleCardProps) {
  return (
    <div className="flex items-center justify-between p-3 border border-indigo-200 rounded-lg">
      <div className="flex gap-4 items-center">
        <div
          className={`flex items-center justify-center text-sm h-10 w-10 rounded-xl bg-indigo-200 text-indigo-700 ${
            sign === "0011" ? "line-through" : ""
          }`}
        >
          {sign}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-indigo-700">{title}</h2>
          <p className="text-sm text-indigo-500">{description}</p>
        </div>
      </div>
      <Switch isChecked={isEnabled} setIsChecked={setIsEnabled} />
    </div>
  );
}

function PasswordGenerator() {
  const navigate = useNavigate();
  const [isLowercase, setIsLowercase] = useState(true);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const [noRepeat, setNoRepeat] = useState(false);

  const [passwordLength, setPasswordLength] = useState(10);
  const [generatedPassword, setGeneratedPassword] = useState(
    "YourGeneratedPassword123!"
  );

  const characters = [
    {
      sign: "abc",
      title: "Lowercase Alphabets",
      description: "Include lowercase letters (a-z) in your password.",
      isEnabled: isLowercase,
      setIsEnabled: setIsLowercase,
    },
    {
      sign: "ABC",
      title: "Uppercase Alphabets",
      description: "Include uppercase letters (A-Z) in your password.",
      isEnabled: isUppercase,
      setIsEnabled: setIsUppercase,
    },
    {
      sign: "123",
      title: "Numbers",
      description: "Include numbers (0-9) in your password.",
      isEnabled: isNumbers,
      setIsEnabled: setIsNumbers,
    },
    {
      sign: "!@#",
      title: "Symbols",
      description:
        "Include special characters (e.g., !, @, #, $) in your password.",
      isEnabled: isSymbols,
      setIsEnabled: setIsSymbols,
    },
    {
      sign: "0011",
      title: "No Repeated Characters",
      description: "Avoid using the same character more than once.",
      isEnabled: noRepeat,
      setIsEnabled: setNoRepeat,
    },
  ];

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedPassword);
    setCopied(true);

    setTimeout(() => setCopied(false), 3000);
  };

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let availableChars = "";
    let mandatoryChars: string[] = [];

    if (isLowercase) {
      availableChars += lowercase;
      mandatoryChars.push(
        lowercase[Math.floor(Math.random() * lowercase.length)]
      );
    }

    if (isUppercase) {
      availableChars += uppercase;
      mandatoryChars.push(
        uppercase[Math.floor(Math.random() * uppercase.length)]
      );
    }

    if (isNumbers) {
      availableChars += numbers;
      mandatoryChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (isSymbols) {
      availableChars += symbols;
      mandatoryChars.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    // If noRepeat is true → ensure length is possible
    // const uniqueCount = new Set(availableChars).size;

    // Remove duplicates from availableChars if needed
    let charPool = noRepeat
      ? Array.from(new Set(availableChars))
      : availableChars.split("");

    // Mandatory characters cannot repeat in noRepeat mode
    let usedSet = new Set<string>();
    if (noRepeat) {
      for (const c of mandatoryChars) {
        usedSet.add(c);
        charPool = charPool.filter((x) => x !== c);
      }
    }

    // Now fill remaining characters
    let result = [...mandatoryChars];
    const remainingLength = passwordLength - mandatoryChars.length;

    for (let i = 0; i < remainingLength; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      const char = charPool[randomIndex];

      result.push(char);

      if (noRepeat) {
        usedSet.add(char);
        charPool.splice(randomIndex, 1); // remove used char
      }
    }

    // Shuffle result
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    setGeneratedPassword(result.join(""));
  };

  return (
    <div className="flex flex-col p-8 gap-10">
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
          Password Generator
        </h1>
      </div>

      <div className="flex gap-6">
        <div className="w-[50%] p-8 border border-indigo-200 rounded-xl">
          <div className="flex flex-col gap-5">
            {characters.map((char) => (
              <ToggleCard
                key={char.title}
                sign={char.sign}
                title={char.title}
                description={char.description}
                isEnabled={char.isEnabled}
                setIsEnabled={char.setIsEnabled}
              />
            ))}
          </div>
        </div>

        <div className="w-[50%] p-8 border border-indigo-200 rounded-xl">
          <div className="flex flex-col h-full gap-5 justify-between">
            <div className="flex flex-col gap-10">
              <div className="w-full px-2">
                <p className="flex justify-between text-2xl font-bold text-indigo-700 mb-6">
                  <span>Password Length</span>
                  <span className="flex items-center justify-center h-8 w-10 rounded-xl bg-indigo-200">
                    {passwordLength}
                  </span>
                </p>

                <Slider
                  min={4}
                  max={16}
                  step={1}
                  value={passwordLength}
                  onChange={setPasswordLength}
                />
              </div>
              <button
                type="button"
                disabled={
                  !isLowercase && !isUppercase && !isNumbers && !isSymbols
                }
                className="cursor-pointer px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2 disabled:bg-indigo-300 disabled:cursor-auto"
                onClick={generatePassword}
              >
                Generate Password
              </button>
            </div>

            <div className="relative flex items-center p-4 border border-indigo-300 rounded-lg bg-indigo-50 text-indigo-700">
              <p className="flex-1 break-all font-mono">{generatedPassword}</p>

              {copied ? (
                <div className="cursor-pointer text-indigo-700 bg-indigo-200 rounded-lg px-2 py-1 font-semibold">
                  Copied to clipboard!
                </div>
              ) : (
                <button
                  className="cursor-pointer text-indigo-700 bg-indigo-200 rounded-lg px-2 py-1 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
                  onClick={copyToClipboard}
                >
                  Copy
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
