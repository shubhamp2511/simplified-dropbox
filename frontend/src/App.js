import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FileViewer from "./pages/FileViewer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/file/:id" element={<FileViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
