import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Welcome from './pages/welcome/Welcome';
import Provider from "./context/provider";
import './App.css'
import Services from "./pages/SetServices/Services/Services";
import Presentation from "./pages/SetServices/Presentation";
import Send from "./pages/Send/Send";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "services",
    element: <Presentation />,
  },
  {
    path: "presentation",
    element: <Services />,
  },
  {
    path: "send",
    element: <Send />,
  }
]);


function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
