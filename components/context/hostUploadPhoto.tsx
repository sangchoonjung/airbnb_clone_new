import { createContext } from "react";
import { ReactNode, useState } from "react";
import UploadPhotos from "../../pages/become-a-host/[itemId]/photos";
import EmptyPhotoBox from "../hostSelectType/photos/emptyPhotoBox";

export type Ctxs = {
  files: File[];
  addFiles: (f: File[]) => void;
  removeFiles: (file: File) => void;
  setMode: (s: string) => void;
  mode: string;
};
export const HostUploadPhotoContext = createContext<Ctxs | null>(null);

const HostUploadPhotoContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setMode] = useState<string>("inputPicture");
  //   console.log(mode, "모드");
  const [files, setFiles] = useState<File[]>([]);

  const addFiles = (f: File[]) => {
    setFiles((current) => {
      return [...current, ...f];
    });
  };

  const removeFiles = (file: File) => {
    // console.log(files.includes(file));
    if (files.includes(file)) {
      const result = files.filter((item) => item !== file);
      return setFiles(result);
    }
  };

  //   console.log(files, "!!!!!!!!!!!!!!");
  return (
    <HostUploadPhotoContext.Provider
      value={{
        files,
        addFiles,
        removeFiles,
        setMode,
        mode,
      }}
    >
      {children}
      {/* <UploadPhotos /> */}
    </HostUploadPhotoContext.Provider>
  );
};
export default HostUploadPhotoContextProvider;
