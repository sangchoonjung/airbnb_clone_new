const prePaymentCheck = async (
  room: any,
  checkin: any,
  checkout: any,
  uniqueId: any
) => {
  const response = await fetch("/api/buyerApi/findBuyerApi", {
    method: "POST",
    body: JSON.stringify({
      roomId: room,
      checkin: checkin,
      checkout: checkout,
      _id: uniqueId,
    }),
    headers: { "Content-type": "application/json" },
  });
  const data = await response.json();
  return data;
};
export default prePaymentCheck;
