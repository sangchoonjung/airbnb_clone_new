import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useContext } from "react";
import { RoomDetailDataContext } from "../../../context/roomDetailData";
import LoadingSpinner from "../../../custom/loadingSpinner";
import { Box, Button, TextField, Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailConvenienceModal() {
  const ctx = useContext(RoomDetailDataContext);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (!ctx?.itemData) {
    return <LoadingSpinner />;
  }
  // console.log(ctx.itemData.convenience, "/////");
  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          bgcolor: "white",
          color: "black",
          border: "1px solid black",
        }}
      >
        전체 편의 시설 보기
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        // style={{ width: "400px", height: "200px" }}
      >
        <DialogTitle>편의 시설</DialogTitle>
        <DialogContent>
          <Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                기본 시설
              </Typography>
              {ctx.itemData.convenience[0].basic.map((one: any) => {
                return (
                  <Box>
                    <Typography key={one}>{one}</Typography>
                  </Box>
                );
              })}
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                안전 시설
              </Typography>
              {ctx.itemData.convenience[0].safety.map((one: any) => {
                return (
                  <Box>
                    <Typography key={one}>{one}</Typography>
                  </Box>
                );
              })}
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                특별 시설
              </Typography>
              {ctx.itemData.convenience[0].special.map((one: any) => {
                return (
                  <Box>
                    <Typography key={one}>{one}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
