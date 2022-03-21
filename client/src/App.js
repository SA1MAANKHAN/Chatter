import { Routes, Route, Link } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.page";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
