import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import Root from "./pages/Root";
import { DataProvider } from "./components/DataFetcher";
import Room from "./components/Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/bedroom",
        element: <Room roomName={"Bedroom"} />,
      },
      {
        path: "/bathroom",
        element: <Room roomName={"Bathroom"} />,
      },
      {
        path: "/garage",
        element: <Room roomName={"Garage"} />,
      },
      {
        path: "/livingroom",
        element: <Room roomName={"Living Room"} />,
      },
      {
        path: "/kitchen",
        element: <Room roomName={"Kitchen"} />,
      },
      {
        path: "/garden",
        element: <Room roomName={"Garden"} />,
      },
      {
        path: "/backdoor",
        element: <Room roomName={"Back Door"} />,
      },
      {
        path: "/frontdoor",
        element: <Room roomName={"Front Door"} />,
      },
    ],
  },
]);

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
