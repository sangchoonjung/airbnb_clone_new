import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { FaAirbnb } from "react-icons/fa";
function HostSelectHeader() {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  const questionHandler = () => {
    alert("준비중입니다");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: 2,
        py: 1,
        position: "absolute",
        top: 0,
        zIndex: 1,
        backgroundColor: "#ffffff",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Button>
        <FaAirbnb style={{ fontSize: 50, color: "black" }} onClick={goHome} />
      </Button>
      <Box>
        <Button
          variant="outlined"
          color="inherit"
          style={{
            backgroundColor: "white",
            fontSize: "14px",
            fontWeight: 600,
            borderRadius: "32px",
            height: 40,
            border: "solid #dddddd 1px",
            textAlign: "center",
            marginRight: 20,
          }}
          onClick={questionHandler}
        >
          궁금하신 점이 있나요?
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          style={{
            backgroundColor: "white",
            fontSize: "14px",
            fontWeight: 600,
            borderRadius: "32px",
            height: 40,
            border: "solid #dddddd 1px",
            textAlign: "center",
          }}
          onClick={goHome}
        >
          나가기
        </Button>
      </Box>
    </Box>
  );
}

export default HostSelectHeader;
