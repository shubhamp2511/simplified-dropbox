import React, { useState, useEffect } from "react";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";
import axios from "../api/api";

const HomePage = () => {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const response = await axios.get("/files");
    setFiles(response.data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <FileUpload fetchFiles={fetchFiles} />
      <FileList files={files} />
    </div>
  );
};

export default HomePage;
