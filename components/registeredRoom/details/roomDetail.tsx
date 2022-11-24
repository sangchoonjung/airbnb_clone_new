import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import DetailPicture from "./detailPicture";
import { useContext } from "react";
import { RoomDetailDataContext } from "../../context/roomDetailData";
import DetailHeader from "./detailHeader";
import DetailBodyLeft from "./detailBodyLeft";
import DetailBodyRight from "./detailBodyRight";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

type con = {
  item: {
    title: string;
    picture: any[];
    uniqueId: string;
    type: string;
    personnel: {
      guest: number;
      bedRoom: number;
      bathRoom: number;
    };
    description: string;
  };
};

function RoomDetail(props: con) {
  const { item } = props;
  const ctx = useContext(RoomDetailDataContext);
  const a = ctx?.setItemData(item);
  // console.log(ctx?.itemData, "2wwwwwwwwwww");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "start",
    color: "black",
  }));
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <DetailHeader />
        <DetailPicture item={item} />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={8} md={8}>
              <Item>
                <DetailBodyLeft />
              </Item>
            </Grid>
            <Grid item xs={4} md={4}>
              <Item sx={{ position: "sticky", top: 0 }}>
                <DetailBodyRight />
              </Item>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography>호스팅 지역</Typography>
        </Box>
      </Box>
    </>
  );
}

export default RoomDetail;
