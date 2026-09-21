import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Layout/AppLayout";
import { ErrorPage } from "./UI/ErrorPage";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Experience } from "./Pages/Experience";
import { Skills } from "./Pages/Skills";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
