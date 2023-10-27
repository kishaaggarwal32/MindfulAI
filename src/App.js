import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import { Wrapper } from "./components/Wrapper";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          />
          <Route
            path="/chat"
            element={
              <Wrapper>
                <Chat />
              </Wrapper>
            }
          />
          <Route
            path="/form"
            element={
              <Wrapper>
                <Form />
              </Wrapper>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Wrapper>
                <Dashboard />
              </Wrapper>
            }
          />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
