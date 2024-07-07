"use client";

import Uploady from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";

const UploadyFileDropper = () => (
  <div>
    {/* <Uploady destination={{ url: "my-server.com/upload" }}> */}
    <Uploady>
      <UploadDropZone
        onDragOverClassName="drag-over"
        htmlDirContentParams={{ recursive: true }}
      >
        <span>Drag&Drop File(s) or Folder(s) Here</span>
      </UploadDropZone>
    </Uploady>
  </div>
);

export default UploadyFileDropper;
