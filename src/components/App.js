import '../css/App.css';
import {Route, Router, Routes} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              {/*<Route path="/product" element={<DetailPage />} />*/}
          </Routes>
      </Router>

  );
}

export default App;

