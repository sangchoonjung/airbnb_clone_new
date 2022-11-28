import { Box, Button, TextField, Typography } from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function ReservationPayMethod() {
  return (
    <Box>
      <Box>결제수단</Box>
      <Box>
        <PayPalScriptProvider
          options={{
            "client-id":
              "Aa48IbAaZwSChrcu8_rGeup6ZDpUDQ6G23WioLGgqix1_7kcDAuIyQj56awVmW6TqSNnd64xFiSomNu3",
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
                      value: "20.05",
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              console.log("결제완료후");
              console.log(data);
              console.log(actions);
            }}
          />
        </PayPalScriptProvider>
      </Box>
    </Box>
  );
}

export default ReservationPayMethod;
