import { createContext } from "vm";
import { ReactNode } from "react";

export const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }: { children: ReactNode }) => {
  return <UserAuthContext.Provider>{children}</UserAuthContext.Provider>;
};

export default UserAuthContextProvider;
