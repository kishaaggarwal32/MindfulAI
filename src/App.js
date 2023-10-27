import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import { Wrapper } from "./components/Wrapper";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/" element={<Wrapper />}>
              <Route path="/home" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/form" element={<Form />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </div>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
