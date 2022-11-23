import { GetServerSideProps } from "next";
import mongooseInit from "../../../lib/mongooseInit";
import HostDB from "../../../lib/model/schema/hostSchema";
import RoomDetail from "../../../components/registeredRoom/details/roomDetail";
import { useContext, useEffect } from "react";
import RoomDetailDataContextProvider, {
  RoomDetailDataContext,
} from "../../../components/context/roomDetailData";

export const Base = ({ item }: { item: any }) => {
  return (
    <>
      <RoomDetailDataContextProvider>
        <RoomDetail item={item} />
      </RoomDetailDataContextProvider>
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
