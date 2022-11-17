import { useContext } from "react";
import { HostUploadPhotoContext } from "../../context/hostUploadPhoto";
import { Box, Button } from "@mui/material";
import PreviewPhotoBoxItem from "./previewPhotoBoxItem";
import Grid from "@mui/material/Grid";
import EmptyPhotoBox from "./emptyPhotoBox";

function PreviewPhotoBox() {
  const ctx = useContext(HostUploadPhotoContext);

  return (
    <Box
      sx={{
        width: "80%",
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={2}>
        {ctx?.files.map((file, index) => {
          return (
            <Grid item md={index === 0 ? 12 : 6} sx={{ position: "relative" }}>
              <PreviewPhotoBoxItem target={file} isCover={index === 0} />
            </Grid>
          );
        })}

        <Grid item md={6} sx={{ position: "relative" }}>
          <EmptyPhotoBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PreviewPhotoBox;
