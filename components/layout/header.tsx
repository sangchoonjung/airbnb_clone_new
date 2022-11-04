import {
  AppBar,
  Button,
  Divider,
  Menu,
  MenuItem,
  MenuProps,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEventHandler, useState } from "react";
import LoginModal from "../userCompo/loginmodal";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);

  const openMenuHandle: MouseEventHandler = (evt) => {
    setAnchorEl(evt.currentTarget);
  };
  const closeMenuHandle = () => {
    setAnchorEl(null);
  };
  return (
    <Toolbar
      sx={{
        justifyContent: "space-between",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Typography variant="h5" color="inherit" noWrap>
        airbnb
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          gap: "0.8rem",
          color: "gray",
          border: "1px solid gray",
          borderRadius: "50px",
        }}
        onClick={openMenuHandle}
      >
        <MenuIcon /> <AccountCircleIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={closeMenuHandle}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          mt: "0.5rem",
        }}
      >
        <MenuItem onClick={openMenuHandle}>
          <LoginModal />
        </MenuItem>
        <Divider />
        <MenuItem onClick={closeMenuHandle}>숙소 호스트 되기</MenuItem>
        <MenuItem onClick={closeMenuHandle}>도움말</MenuItem>
      </Menu>
    </Toolbar>
  );
}
