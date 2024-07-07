"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import "./file-dropper.css";

import FilesIcon from "@/public/files-icon.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { JobDataContext } from "./JobContextProvider";

const FileDropper = ({ onFilesSelected, width, height }: any) => {
  const [files, setFiles] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<any>(null);

  const { jobId, setJobId } = useContext(JobDataContext);
  console.log("##", files);
  useEffect(() => {
    const params = new URLSearchParams();
    params.append("email", "front@front.com");
    params.append("password", "front123");
    params.append("phone_number", "0000000000");
    params.append("phone_number_code", "7");
    axios
      .post("https://manuspect.ru/auth/login", params)
      .then((res) => {
        setAccessToken(res.data.access_token);
        console.log("access token is set");
      })
      .catch((e) => console.log("rej while getting access token", e));
  }, []);

  //   fetch("https://manuspect.ru/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: params,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setAccessToken(data.access_token));
  // });
  //       console.log("access token is set");)

  const handleFileSending = () => {
    if (accessToken == null) {
      console.log("access token not found while tryna send file!");
      return;
    }
    console.log("@files", files);
    let formData = new FormData();
    formData.append("uploaded_file", files);
    axios
      .post(
        "http://109.248.175.184:9080/v1/uploaded_files?auth_token=" +
          accessToken,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((res) => {
        console.log("@res", res.data.job_id);
        if (res && res.data && res.data.job_id) setJobId(res.data.job_id);
      })
      .catch((e) => console.log("rej in inner scope", e));
  };

  const handleFileChange = (event: any) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      setFiles(selectedFiles[0]);
    }
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    console.log("@droppedFiles", droppedFiles);
    if (droppedFiles != null) {
      // const newFiles = Array.from(droppedFiles);
      console.log("@dropped 1 file which is ", droppedFiles[0]);
      setFiles(droppedFiles[0]);
      // setFiles((prevFiles: any) => [...prevFiles, droppedFiles[0]]);
    }
  };
  const handleRemoveFile = () => {
    setFiles(null);
  };

  useEffect(() => {
    // onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <section
      className="drag-drop flex flex-col gap-5 items-center"
      style={{ width: width, height: height }}
    >
      <div
        className={`document-uploader ${
          files != null ? "upload-box active" : "upload-box"
        } !border-primary w-full h-[46vh] !rounded-3xl !bg-[#DCFCE7]`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        {files == null && (
          <>
            <div className="upload-info">
              {/* <AiOutlineCloudUpload /> */}
              <div className="flex flex-col items-center justify-center gap-6">
                <Image src={FilesIcon} alt="" />
                <h1 className="text-2xl text-center font-bold">
                  Добавьте .zip файл, содержащий снимки с одной фотоловушки
                </h1>
              </div>
            </div>
          </>
        )}
        {files != null && (
          <div className="file-list overflow-hidden">
            <div className="">
              {
                <div className="file-item">
                  <div className="file-info">
                    <p>{files.name}</p>
                  </div>
                  <div className="file-actions">
                    <div onClick={handleRemoveFile}>Удалить</div>
                  </div>
                </div>
              }
            </div>
          </div>
        )}

        {files != null && (
          <div className="success-file">
            {/* <AiOutlineCheckCircle
              style={{ color: "#6DC24B", marginRight: 1 }}
            /> */}
            {/* <p>Количество фото для выбранной фотоловушки: {files.length === 1 ? files[0]}</p> */}
          </div>
        )}
      </div>
      <input
        type="file"
        hidden
        id="browse"
        onChange={handleFileChange}
        accept=".zip"
      />
      <div className="flex gap-5 items-center">
        <span className="text-gray-600">или</span>
        <Button>
          <label
            htmlFor="browse"
            className="browse-btn flex gap-4 items-center hover:cursor-pointer"
          >
            Выберите файлы(-ы)
          </label>
        </Button>
        {files != null && (
          <Button onClick={handleFileSending} asChild>
            <Link href="/recognized">Распознать</Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default FileDropper;
