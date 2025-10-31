import React, { useEffect, useState } from "react";
import axios from "axios";
import {useForm} from "react-hook-form";

function FileUploader() {
  const [file, setFile] = useState(null);
  const [fileStatus, setFileStatus] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  // function fileChangeHandler(e) {
  //   if (e.target.files) {
  //     setFile(e.target.files[0]);
  //   }
  // }

  async function onSubmit(data) {



    setFileStatus("uploading");
    setUploadProgress(0);
    console.log(data.file[0])

    const formData = new FormData();
    formData.append("file", data.file[0]);

    try {

      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0;
          setUploadProgress(progress);
        },
      });

      reset();
      setFileStatus("success");
      setFile(null);
    } catch (error) {
      console.log(error)
      setFileStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" name="" id="" {...register("file", {
        required: {value: true},
        onChange: (e) => {
          if (e.target.files) {
                setFile(e.target.files[0]);
                setFileStatus("idle")
              }
        }
        })} 
        disabled={fileStatus !== "idle" && fileStatus !== "success"}
        accept="image/*,application/pdf"
         />
      {file && (
        <div>
          <p>File Name: {file.name}</p>
          <p>File Size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>File Type: {file.type}</p>
        </div>
      )}
      {file && fileStatus !== "uploading" && (
        <button type="submit">Upload</button>
      )}

      {fileStatus === "success" && (
        <h3 style={{ color: "green" }}>File Uploaded Successfully!</h3>
      )}
      {fileStatus === "error" && (
        <h3 style={{ color: "red" }}>Error while uploading the file!</h3>
      )}
      {fileStatus === "uploading" && (
        <div>
          <div style={{ border: "1px solid black", height: "20px" }}>
            <span
              style={{
                height: "20px",
                width: `${uploadProgress}%`,
                backgroundColor: "red",
                display: "inline-block",
              }}
            ></span>
          </div>
          <p>{uploadProgress}% uploaded</p>
        </div>
      )}
    </form>
  );
}

export default FileUploader;
