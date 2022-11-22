import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState, useRef, useContext } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import { HostUploadPhotoContext } from "../../context/hostUploadPhoto";

function EmptyPhotoBox() {
  const ref = useRef<HTMLInputElement>(null);
  const ctx = useContext(HostUploadPhotoContext);

  const dropHandle: React.DragEventHandler = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    //드롭된 파일명
    const droppedFiles = Array.from(evt.dataTransfer.files); //파일 배열
    ctx?.addFiles(droppedFiles);
    if (droppedFiles.length > 0) {
      ctx?.setMode("uploadingPicture");
    }
  };

  const fileSelectHandle: React.ChangeEventHandler<HTMLInputElement> = (
    evt: any
  ) => {
    //픽업된 파일명
    const droppedFiles = Array.from(evt?.target?.files);
    ctx?.addFiles(droppedFiles as File[]);
    if (droppedFiles.length > 0) {
      ctx?.setMode("uploadingPicture");
    }
  };
  // console.log(ctx?.files, "업로드한 파일(드롭,픽업 모두포함)");

  return (
    <Box
      sx={{
        border: "dotted 1px black",
        padding: "8rem",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "700px",
        height: "500px",
        // objectFit: "cover",
      }}
      // 드래그 오버 , 드랍 모두 다 이벤트 걸어줘야한다.
      onDragOver={(evt) => {
        evt.preventDefault();
        evt.stopPropagation();
      }}
      onDrop={dropHandle}
    >
      <CollectionsIcon sx={{ fontSize: "8rem" }} />
      <Typography>여기로 사진을 끌어다 놓으세요.</Typography>
      <Typography>5장 이상의 사진을 선택하세요.</Typography>
      <Button
        style={{
          borderBottom: "solid 1px",
          color: "black",
          borderRadius: 0,
        }}
        variant="text"
        onClick={() => {
          ref.current?.click();
        }}
      >
        기기에서 업로드
      </Button>
      {/* 디스플레이 안보이게하고 ref 이용해서 연결 */}
      <input
        type="file"
        ref={ref}
        style={{ display: "none" }}
        accept="image/*"
        multiple
        onChange={fileSelectHandle}
      />
    </Box>
  );
}

export default EmptyPhotoBox;
