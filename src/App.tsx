import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/HomePage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import InfiniteScroll from "./pages/InfiniteScroll.tsx";
import DebounceSearch from "./pages/DebounceSearch.tsx";
import CardGradient from "./pages/CardGradient.tsx";
import PasswordGenerator from "./pages/PasswordGenerator.tsx";
import OfflineModal from "./components/OfflineModal.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/infinite-scroll",
      element: <InfiniteScroll />,
    },
    {
      path: "/debounce-search",
      element: <DebounceSearch />,
    },
    {
      path: "/card-gradient",
      element: <CardGradient />,
    },
    {
      path: "/password-generator",
      element: <PasswordGenerator />,
    },
  ],
  {
    basename: "/react-practice",
  }
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <OfflineModal />
    </>
  );
};

export default App;
