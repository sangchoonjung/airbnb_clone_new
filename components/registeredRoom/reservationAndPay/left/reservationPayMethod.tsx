import { Box, Button, TextField, Typography } from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import prePaymentCheck from "../../../../lib/buyerPayment/prePaymentCheck";
import { BuyerDetailContext } from "../../../context/buyerDetail";
import BuyerDB from "../../../../lib/model/schema/buyerSchema";
import paymentComplete from "../../../../lib/buyerPayment/paymentComplete";
function ReservationPayMethod({
  setSubmitHandle,
}: {
  setSubmitHandle: (b: boolean) => void;
}) {
  const buyerCtx = useContext(BuyerDetailContext);
  // console.log(buyerCtx?.detailData.price.total);
  const totlaPrice = buyerCtx?.detailData?.price?.total;
  const totalDollar = ((totlaPrice as number) / 1300).toFixed(2);
  // console.log(totalDollar);
  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
          결제수단
        </Typography>
      </Box>
      <Box>
        <PayPalScriptProvider
          options={{
            "client-id":
              "Aa48IbAaZwSChrcu8_rGeup6ZDpUDQ6G23WioLGgqix1_7kcDAuIyQj56awVmW6TqSNnd64xFiSomNu3",
            intent: "authorize",
          }}
        >
          <PayPalButtons
            style={{ layout: "horizontal" }}
            createOrder={(data, actions) => {
              console.log("오더");

              return actions.order.create({
                purchase_units: [
                  {
                    description: "숙소 예약",
                    amount: {
                      value: `${totalDollar}`,
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const response = await prePaymentCheck(
                buyerCtx?.detailData.roomId,
                buyerCtx?.detailData.useDate?.start,
                buyerCtx?.detailData.useDate?.end,
                buyerCtx?.detailData._id
              );
              console.log(response, "aaaaaaa");
              if (response.result) {
                // 결제 승인처리
                const payResult = await actions.order?.authorize();
                console.log(payResult);
                // 결제 승인 true 업데이트
                const rst = await paymentComplete(
                  buyerCtx?.detailData._id,
                  payResult
                );
                setSubmitHandle(true);
                console.log(rst, "결과");
              }
            }}
          />
        </PayPalScriptProvider>
      </Box>
    </Box>
  );
}

export default ReservationPayMethod;
