import { userAgent } from "next/server";
import { useEffect, useState, useContext } from "react";
import { HostUploadPhotoContext } from "../../context/hostUploadPhoto";
function PreviewPhotoBoxItem({ target }) {
  console.log(target, "타겟");
  const [imgURI, setImgURI] = useState("");
  const ctx = useContext(HostUploadPhotoContext);

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target);
    fileReader.onload = (rst) => {
      setImgURI(rst.target?.result);
      // console.log(rst.target.result);
    };
  }, []);

  return (
    <>
      <img src={imgURI} alt={"aaaaa"} />
    </>
  );
}

export default PreviewPhotoBoxItem;
