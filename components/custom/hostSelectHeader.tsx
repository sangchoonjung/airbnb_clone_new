import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { FaAirbnb } from "react-icons/fa";
function HostSelectHeader() {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: 30,
      }}
    >
      <FaAirbnb style={{ fontSize: 50 }} onClick={goHome} />
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
