import { createContext } from "react";
import { ReactNode } from "react";
import { UserAuthContext } from "./userAuth";
import LoginModal from "../userCompo/loginmodal";
import { useState } from "react";
type modal = {
  inputedEmail?: string | null;
  setInputedEmail?: (a: string) => void;
};
export const ModalMove = createContext<modal | null>(null);

const ModalMoveProvider = () => {
  const [inputedEmail, setInputedEmail] = useState<string | null>(null);

  return (
    <ModalMove.Provider value={{ inputedEmail, setInputedEmail }}>
      <LoginModal />
    </ModalMove.Provider>
  );
};

export default ModalMoveProvider;
