import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginInputEmail from "./loginInputEmail";
import MethodOfLogin from "./methodOfLogin";
import JoinInput from "./joinInput";
import ConfirmPass from "./confirmPass";
import { useState, useContext } from "react";
import { ModalMove } from "../context/modalMove";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxHeight: 600,
  bgcolor: "background.paper",
  border: "1px solid #666666",
  boxShadow: 20,
  p: 4,
  borderRadius: 3,
};

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const text = useContext(ModalMove);
  console.log(text);

  const [mode, setMode] = useState<string>("inputEmail");
  const [inputEmail, setInputEmail] = useState<string>("");
  const changeMode = (newMode: string) => {
    setMode(newMode);
  };

  return (
    <div>
      <Box onClick={handleOpen}>로그인</Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="body1"
            component="h2"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            로그인 또는 회원가입
          </Typography>

          {/* =================================================================================== */}
          {mode === "inputEmail" && (
            <MethodOfLogin
              changeMode={changeMode}
              setInputEmail={setInputEmail}
            />
          )}
          {mode === "joinInput" && (
            <JoinInput inputEmail={inputEmail} changeMode={changeMode} />
          )}
          {mode === "confirmPass" && (
            <ConfirmPass inputEmail={inputEmail} handleClose={handleClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
}
