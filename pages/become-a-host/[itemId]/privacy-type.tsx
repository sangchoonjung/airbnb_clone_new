import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";

function privacyType() {
  const router = useRouter();
  const { itemId } = router.query;

  const nextStepHandle = () => {
    // 데이터 업데이트 fetch...===>
    // 정상처리가 된다면
    router.push("/become-a-host/" + itemId + "/???");
  };
  return (
    <Box>
      [{itemId}] 게스트가 머무르게 될 숙소의 종류가 무엇인가요?
      <Button onClick={nextStepHandle}>다음</Button>
    </Box>
  );
}

export default privacyType;
