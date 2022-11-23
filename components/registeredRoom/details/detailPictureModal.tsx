import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type con = {
  pictureArray: any[];
};

export default function DetailPictureModal(props: con) {
  const { pictureArray } = props;
  //   console.log(props.pictureArray, "awwwwwwwwwwwww");
  //   console.log(pictureArray.picture, "aaaaaaaa");
  // console.log(props.pictureArray);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          bgcolor: "white",
          color: "black",
          border: "1px solid black",
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        전체사진 보기
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>전체 사진</DialogTitle>
        <DialogContent>
          {props.pictureArray.map((one) => {
            return (
              <img
                src={one.extraUrl}
                key={one.extraUrl}
                width="100%"
                height="100%"
                style={{
                  marginBottom: 20,
                  border: "solid 1px #999999",
                  borderRadius: 10,
                }}
              />
            );
          })}
        </DialogContent>
      </Dialog>
    </div>
  );
}
