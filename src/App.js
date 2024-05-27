import { Provider } from "react-redux";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import appStore from "./utilities/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Watch from "./components/Body/Watch/Watch";
import MainContainer from "./components/Body/MainContainer/MainContainer";
import DemoMemo from "./components/DemoMemo/DemoMemo";
import DemoRef from "./components/DemoMemo/DemoRef";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "watch", element: <Watch /> },
        {
          path: "demo",
          element: (
            <>
              <DemoMemo />
              <DemoRef />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
        {/**
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         * Main Container
         *  Video Container
         *    Video Card
         */}
      </div>
    </Provider>
  );
}

export default App;
