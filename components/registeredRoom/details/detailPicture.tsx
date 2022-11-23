import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DetailPictureModal from "./detailPictureModal";
import { useContext } from "react";
import { RoomDetailDataContext } from "../../context/roomDetailData";

import LoadingSpinner from "../../custom/loadingSpinner";
type con = {
  item: {
    picture: any[];
  };
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DetailPicture(props: con) {
  const { item } = props;

  const ctx = useContext(RoomDetailDataContext);

  if (!ctx?.itemData)
    return (
      <>
        <LoadingSpinner />
      </>
    );
  // console.log(ctx?.itemData.picture[0].extraUrl, "컨텍스트 아이템");
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={8}>
          <Item>
            <img
              src={ctx?.itemData.picture[0].extraUrl}
              alt="커버 사진"
              width={"100%"}
              height={"500px"}
              style={{ objectFit: "cover" }}
            />
          </Item>
        </Grid>

        <Grid item xs={8} md={4} sx={{ position: "relative" }}>
          <Item>
            <img
              src={ctx?.itemData.picture[1].extraUrl}
              alt="1번"
              width={"100%"}
              height={"240px"}
              style={{ objectFit: "cover" }}
            />
          </Item>
          <Item>
            <img
              src={ctx?.itemData.picture[2].extraUrl}
              alt="2번"
              width={"100%"}
              height={"240px"}
              style={{ objectFit: "cover" }}
            />
          </Item>

          <DetailPictureModal pictureArray={item.picture} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailPicture;

// export const getStaticProps: GetStaticProps = async (context) => {
//     const ctx = useContext(RoomDetailDataContext);
//     console.log(ctx?.itemData.picture[0].extraUrl, "컨텍스트 아이템");
//     return {
//       props: { ctx:ctx },
//     };
//   }
