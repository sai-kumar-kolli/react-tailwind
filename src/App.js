import { Route, Routes } from "react-router-dom"; // Ensure you're using react-router-dom
import "./styles.css";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
