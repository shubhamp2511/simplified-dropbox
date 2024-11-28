import React from "react";
import { Link } from "react-router-dom";

const FileList = ({ files }) => {
  return (
    <ul>
      {files.map((file) => (
        <li key={file.id}>
          <Link to={`/file/${file.id}`}>{file.filename}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FileList;
