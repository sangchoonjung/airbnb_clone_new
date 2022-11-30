const paymentComplete = async (uniqueId: any, auth: any) => {
  const response = await fetch("/api/buyerApi/completeBuyerApi", {
    method: "POST",
    body: JSON.stringify({
      _id: uniqueId,
      payauth: auth,
    }),
    headers: { "Content-type": "application/json" },
  });
  const data = await response.json();
  return data;
};
export default paymentComplete;
