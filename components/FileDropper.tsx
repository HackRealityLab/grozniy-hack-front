"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import "./file-dropper.css";

import FilesIcon from "@/public/files-icon.svg";
import Image from "next/image";
import Link from "next/link";

const FileDropper = ({ onFilesSelected, width, height }: any) => {
  const [files, setFiles] = useState<any>([]);
  const ref = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (event: any) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    console.log("@droppedFiles", droppedFiles);
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
    }
  };
  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles: any) =>
      prevFiles.filter((_: any, i: any) => i !== index)
    );
  };

  useEffect(() => {
    // onFilesSelected(files);
  }, [files, onFilesSelected]);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.setAttribute("directory", "");
      ref.current.setAttribute("webkitdirectory", "");
    }
  }, [ref]);

  return (
    <section
      className="drag-drop flex flex-col gap-5 items-center"
      style={{ width: width, height: height }}
    >
      <div
        className={`document-uploader ${
          files.length > 0 ? "upload-box active" : "upload-box"
        } !border-primary w-full h-[46vh] !rounded-3xl !bg-[#DCFCE7]`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        {files.length == 0 && (
          <>
            <div className="upload-info">
              {/* <AiOutlineCloudUpload /> */}
              <div className="flex flex-col items-center justify-center gap-6">
                <Image src={FilesIcon} alt="" />
                <h1 className="text-2xl font-bold">ПЕРЕТАЩИТЕ ФАЙЛ(-Ы) СЮДА</h1>
              </div>
            </div>
          </>
        )}
        {files.length > 0 && (
          <div className="file-list overflow-hidden">
            <div className="file-list__container overflow-y-scroll">
              {files.map((file: any, index: any) => (
                <div className="file-item" key={index}>
                  <div className="file-info">
                    <p>{file.name}</p>
                  </div>
                  <div className="file-actions">
                    <div onClick={() => handleRemoveFile(index)}>Удалить</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {files.length > 0 && (
          <div className="success-file">
            {/* <AiOutlineCheckCircle
              style={{ color: "#6DC24B", marginRight: 1 }}
            /> */}
            <p>Выбрано файлов: {files.length}</p>
          </div>
        )}
      </div>
      <input
        type="file"
        hidden
        id="browse"
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png"
        multiple
        ref={ref}
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
        {files.length !== 0 && (
          <Button asChild>
            <Link href="/recognized">Зарегистрировать</Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default FileDropper;
