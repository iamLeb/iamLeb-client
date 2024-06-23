import {BrowserRouter, Route, Routes} from "react-router-dom";
import FrontLayouts from "./layouts/FrontLayouts.jsx";
import Home from "./pages/front/Home.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<FrontLayouts />}>
                  <Route index element={<Home />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
