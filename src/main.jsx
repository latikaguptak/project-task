import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Manufacturing from "./pages/containers_pages/Manufacturing.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Tools from "./pages/containers_pages/Tools";
import Access from "./pages/containers_pages/Access";
import Collaborations from "./pages/containers_pages/Collaborations.jsx";
import Policy from "./pages/containers_pages/Policy.jsx";
import References from "./pages/containers_pages/References.jsx";
import Chats from "./pages/chat_room/Chats";
import { MenuProvider } from './components/context/MenuContext';
import HomeItems from "./pages/home/HomeItems.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MenuProvider>
        <App />
      </MenuProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        children: [],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/manufacturing",
        element: <Manufacturing />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/tools",
        element: <Tools />,
      },
      {
        path: "/access",
        element: <Access />,
      },
      {
        path: "/collaborations",
        element: <Collaborations />,
      },
      {
        path: "/policy",
        element: <Policy />,
      },
      {
        path: "/references",
        element: <References />,
      },
      {
        path: "/Chats",
        element: <Chats />,
      },
      {
        path: "/homeitem1",
        element: <HomeItems />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);