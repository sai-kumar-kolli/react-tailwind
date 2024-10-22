import { Route, Routes } from "react-router-dom"; // Ensure you're using react-router-dom
import "./styles.css";
import Home from "./Components/Home";

export default function App() {
  console.log("App");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
