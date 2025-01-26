import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Carrinho, ErrorPage, Home, HomeLayout, Vitrine } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/vitrine",
          element: <Vitrine />,
        },
        {
          path: "/carrinho",
          element: <Carrinho />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
