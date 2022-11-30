import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
function ReservationSubmitButton({ submitHandle }: { submitHandle: boolean }) {
  const router = useRouter();
  const submitComplete = () => {
    router.push("/myPage");
  };
  return (
    <Box>
      <Button
        variant="contained"
        disabled={!submitHandle}
        sx={{ width: "100%" }}
        onClick={submitComplete}
      >
        예약 완료 하기
      </Button>
    </Box>
  );
}

export default ReservationSubmitButton;
