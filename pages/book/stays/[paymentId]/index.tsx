import { GetServerSideProps } from "next";
import BuyerDB from "../../../../lib/model/schema/buyerSchema";
import mongooseInit from "../../../../lib/mongooseInit";
import BuyerDetailContextProvider from "../../../../components/context/buyerDetail";
import ReservationContain from "../../../../components/registeredRoom/reservationAndPay/reservationContain";

function PayRoom({ item }: { item: any }) {
  // 호스팅 아이디 / 게스트 아이디 / orderID/payerID/ 체크인/체크아웃/게스트수

  console.log(item);
  return (
    <BuyerDetailContextProvider>
      <ReservationContain item={item} />
    </BuyerDetailContextProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { paymentId } = context.query;
  mongooseInit();
  const hosting = await BuyerDB.findById(paymentId);
  if (!hosting) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      item: JSON.parse(JSON.stringify(hosting)),
    },
  };
};

export default PayRoom;
