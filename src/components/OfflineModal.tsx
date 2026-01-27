import { useEffect, useState } from "react";

function OfflineModal() {
  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);
  const [showOnline, setShowOnline] = useState(false);

  useEffect(() => {
    const handleOffline = () => {
      setIsOffline(true);
      setShowOnline(false);
    };

    const handleOnline = () => {
      if (isOffline) {
        setShowOnline(true);
        setTimeout(() => setShowOnline(false), 3000);
      }
      setIsOffline(false);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [isOffline]);

  if (isOffline) {
    return (
      <div className="h-[100vh] w-[100vw] fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)]">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 w-[400px] rounded-md border border-neutral-300">
          <h1 className="w-full p-4 font-semibold bg-neutral-200">Offline</h1>
          <div className="text-neutral-900 text-sm p-4 bg-neutral-50 border-y border-neutral-300">
            <p>You are Offline. Please check your internet connection.</p>
          </div>
          <div className="flex justify-end w-full bg-neutral-200 px-4 py-3">
            <button
              onClick={() => setIsOffline(false)}
              className="bg-indigo-700 text-neutral-50 cursor-pointer rounded-lg px-3 py-1 focus-visible:outline-2 focus-visible:outline-indigo-700 focus-visible:outline-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showOnline) {
    return (
      <div className="h-[100vh] w-[100vw] fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)]">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 w-[400px] rounded-md border border-neutral-300">
          <div className="text-neutral-900 text-sm p-4 rounded bg-neutral-50">
            <p>Hooray! You are back online 🎉</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default OfflineModal;
