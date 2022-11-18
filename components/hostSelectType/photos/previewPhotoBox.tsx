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
        width: "50%",
      }}
    >
      <Grid container rowSpacing={4} columnSpacing={5}>
        {ctx?.files.map((file, index) => {
          return (
            <Grid
              item
              md={index === 0 ? 12 : 6}
              // sx={{ position: "relative" }}
              key={file.name}
            >
              <PreviewPhotoBoxItem target={file} isCover={index === 0} />
            </Grid>
          );
        })}

        <Grid
          item
          md={12}
          sx={{
            position: "relative",
            display: "flex",
          }}
        >
          <EmptyPhotoBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PreviewPhotoBox;
