import { createContext } from "vm";
import { ReactNode } from "react";
import { UserAuthContext } from "./userAuth";
import LoginModal from "../userCompo/loginmodal";
import { useState } from "react";
type modal = {
  inputedEmail: string;
  setInputedEmail: () => void;
};
export const ModalMove = createContext({});

const ModalMoveProvider = () => {
  const [inputedEmail, setInputedEmail] = useState<string>("aaa");
  return (
    <UserAuthContext.Provider value={{ setInputedEmail, inputedEmail }}>
      <LoginModal />
    </UserAuthContext.Provider>
  );
};

export default ModalMoveProvider;
