import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Auth from "./screens/auth/Auth";
import Landing from "./screens/landing/Landing";
import Lost from "./screens/Lost";
import Notes from "./screens/notes/Notes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/*" element={<Lost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
