import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { userAgent } from "next/server";
import { useEffect, useState, useContext } from "react";
import { HostUploadPhotoContext } from "../../context/hostUploadPhoto";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function PreviewPhotoBoxItem({ target }: { target: File }) {
  // console.log(target, "타겟");
  const [imgURI, setImgURI] = useState("");
  const ctx = useContext(HostUploadPhotoContext);

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target);
    fileReader.onload = (rst: any) => {
      setImgURI(rst.target?.result);
      // console.log(rst.target.result);
    };
  }, []);
  console.log(ctx?.files, "파일리스트");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        bgcolor: "#999999",
      }}
    >
      <Button
        onClick={() => {
          ctx?.removeFiles(target);
        }}
      >
        <DeleteForeverIcon sx={{ color: "#222222" }} />
      </Button>
      <img src={imgURI} alt={"imgError"} width="100%" height={"240px"} />
    </Box>
  );
}

export default PreviewPhotoBoxItem;
