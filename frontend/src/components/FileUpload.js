import React, { useState } from "react";
import axios from "../api/api";

const FileUpload = ({ fetchFiles }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("/upload", formData);
    fetchFiles(); // Refresh the file list after upload
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;
