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
import logo from "../../public/icon/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEventHandler, useState } from "react";
import LoginModal from "../userCompo/loginmodal";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Box } from "@mui/system";

export default function Header() {
  const { data, status } = useSession();
  const [anchorEl, setAnchorEl] = useState<Element | null | boolean>(null);
  const router = useRouter();
  const openMenuHandle: MouseEventHandler = (evt: any) => {
    setAnchorEl(evt?.currentTarget);
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
      <Button
        variant="text"
        color="inherit"
        sx={{ fontWeight: "bold", color: "#E61E4D", fontSize: 35 }}
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          src={logo}
          alt="Picture of the author"
          width={30}
          height={30}
          style={{ marginRight: 5 }}
        />
        airbnb
      </Button>
      <Box>
        {status === "authenticated" && (
          <Button
            variant="text"
            color="inherit"
            style={{ fontWeight: "bold", marginRight: 20 }}
            onClick={() => {
              router.push("become-a-host");
            }}
          >
            호스트되기
          </Button>
        )}
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
      </Box>
      <Menu
        anchorEl={
          anchorEl as
            | Element
            | ((element: Element) => Element)
            | null
            | undefined
        }
        open={anchorEl as boolean}
        onClose={closeMenuHandle}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {status === "unauthenticated" && (
          <MenuItem onClick={openMenuHandle}>
            <LoginModal />
          </MenuItem>
        )}
        {status === "authenticated" && (
          <Box>
            <MenuItem
              onClick={() => {
                signOut();
              }}
            >
              로그아웃
            </MenuItem>
            <MenuItem
              onClick={() => {
                router.push("/myTravel");
              }}
            >
              내 예약
            </MenuItem>
          </Box>
        )}

        {/* <Divider /> */}
        <MenuItem onClick={closeMenuHandle}>숙소 호스트 되기</MenuItem>
        <MenuItem onClick={closeMenuHandle}>도움말</MenuItem>
      </Menu>
    </Toolbar>
  );
}
