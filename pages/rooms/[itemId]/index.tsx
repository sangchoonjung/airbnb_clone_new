import { GetServerSideProps } from "next";
import mongooseInit from "../../../lib/mongooseInit";
import HostDB from "../../../lib/model/schema/hostSchema";
import RoomDetail from "../../../components/registeredRoom/details/containBox/roomDetail";
import { useContext, useEffect } from "react";
import RoomDetailDataContextProvider, {
  RoomDetailDataContext,
} from "../../../components/context/roomDetailData";
import RoomDatePickDataProvider from "../../../components/context/roomDatePickData";

export const Base = ({ item }: { item: any }) => {
  return (
    <>
      <RoomDatePickDataProvider>
        <RoomDetailDataContextProvider>
          <RoomDetail item={item} />
        </RoomDetailDataContextProvider>
      </RoomDatePickDataProvider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log(context.query);
  const { itemId } = context.query;
  mongooseInit();
  const hosting = await HostDB.findById(itemId);
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

export default Base;
