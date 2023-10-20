import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Landing from "../src/pages/Landing";
// import Features from "./pages/Features";
import SimpleThreeColumns from "./pages/Features";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/learnmore" element={<SimpleThreeColumns/>} />
        </Routes>

      </Router>
    </ChakraProvider>
  );
}

export default App;
