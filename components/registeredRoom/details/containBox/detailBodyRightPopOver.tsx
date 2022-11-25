import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState } from "react";

export default function DetailBodyRightPopOver() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const popupArray = [
    { title: "성인", description: "만 13세 이상", key: "adult" },
    { title: "어린이", description: "만 2 ~ 12세", key: "children" },
    { title: "유아", description: "만 2세 미만", key: "baby" },
    {
      title: "반려동물",
      description: "보조동물을 동반하시나요?",
      key: "animal",
    },
  ];
  const [count, setCount] = useState<any>({
    adult: 1,
    children: 0,
    baby: 0,
    animal: 0,
  });
  // console.log(count, "카운트");

  const minusHandler = (evt: string) => {
    switch (evt) {
      case "adult":
        return setCount({ ...count, adult: count[evt] - 1 });
      case "children":
        return setCount({ ...count, children: count[evt] - 1 });
      case "baby":
        return setCount({ ...count, baby: count[evt] - 1 });
      case "animal":
        return setCount({ ...count, animal: count[evt] - 1 });
    }
  };

  const plusHandler = (evt: string) => {
    switch (evt) {
      case "adult":
        return setCount({ ...count, adult: count[evt] + 1 });
      case "children":
        return setCount({ ...count, children: count[evt] + 1 });
      case "baby":
        return setCount({ ...count, baby: count[evt] + 1 });
      case "animal":
        return setCount({ ...count, animal: count[evt] + 1 });
    }
  };

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
        sx={{ width: "100%", border: "solid 1px #999999", color: "black" }}
        color="success"
      >
        인원
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        // sx={{ width: "500px" }}
      >
        <Box>
          {popupArray.map((one) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column" }}
                  key={one.title}
                >
                  <Typography sx={{ p: 2 }}>{one.title}</Typography>
                  <Typography sx={{ p: 2 }}>{one.description}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={() => {
                      minusHandler(one.key);
                      // console.log(typeof one.title);
                    }}
                    disabled={count[one.key] < 1 ? true : false}
                  >
                    <RemoveCircleOutlineIcon sx={{ color: "#666666" }} />
                  </Button>

                  <Box>{count[one.key]}</Box>

                  <Button
                    onClick={() => {
                      plusHandler(one.key);
                    }}
                  >
                    <ControlPointIcon sx={{ color: "#666666" }} />
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Popover>
    </div>
  );
}
