import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { BuyerDetailContext } from "../../../context/buyerDetail";

function ReservationTotalOrPart() {
  const [value, setValue] = useState("allPayment");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  // console.log(value);
  const buyerCtx = useContext(BuyerDetailContext);
  // console.log(buyerCtx?.detailData.price.total);
  const totalPrice = buyerCtx?.detailData?.price?.total;
  const apartPrice = ((totalPrice as number) * 3) / 10;
  const theOtherPrice = ((totalPrice as number) * 7) / 10;

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", fontSize: 20, my: 2 }}>
        결제방식 선택하기
      </Typography>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <Box
            sx={[
              value == "allPayment"
                ? {
                    border: "solid 3px black",
                  }
                : {
                    border: "solid 1px black",
                  },
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                p: 1,
              },
            ]}
          >
            <Box>
              <Typography>전액결제</Typography>
              <Typography>총액을 결제하시면 모든 절차가 완료됩니다.</Typography>
            </Box>
            <Box>
              <FormControlLabel
                value="allpayment"
                control={<Radio />}
                label=""
              />
            </Box>
          </Box>
          <Box
            sx={[
              value == "partPayment"
                ? {
                    border: "solid 3px black",
                  }
                : {
                    border: "solid 1px black",
                  },
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                p: 1,
              },
            ]}
          >
            <Box>
              <Typography>
                요금 일부는 지금 결제, 나머지는 나중에 결제
              </Typography>
              <Typography>
                지금 ₩{apartPrice.toLocaleString()}을(를) 결제하시면, 나머지
                금액 ₩{theOtherPrice.toLocaleString()}은 동일한 결제수단으로
                2023년 3월 5일 자동 청구됩니다. 추가 수수료는 없습니다.
              </Typography>
            </Box>
            <Box>
              <FormControlLabel
                value="partPayment"
                control={<Radio color="default" />}
                label=""
              />
            </Box>
          </Box>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default ReservationTotalOrPart;
