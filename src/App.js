import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/404/NotFound";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Quizes from "./components/Quizes/Quizes";
import Statistics from "./components/Statistics/Statistics";
import Root from "./Layouts/Root";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: `/quiz/:quizId`,
          element: <Quizes />,
          loader: async ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
