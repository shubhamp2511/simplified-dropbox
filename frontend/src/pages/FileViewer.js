import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/api";

const FileViewer = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);

  const fetchFile = async () => {
    const response = await axios.get(`/files/${id}`);
    setFile(response.data);
  };

  useEffect(() => {
    fetchFile();
  }, [id]);

  return (
    <div>
      {file ? (
        <div>
          <h2>{file.filename}</h2>
          <a href={`/download/${id}`} download>
            Download File
          </a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FileViewer;
