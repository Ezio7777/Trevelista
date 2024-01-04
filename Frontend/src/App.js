import Navbar from "./components/navbar";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup";

import "./App.css";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
