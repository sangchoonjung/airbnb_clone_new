import { useSession } from "next-auth/react";
import { createContext } from "react";
import { ReactNode, useState } from "react";

export interface Ctxs {
  status?: string | undefined;
  flag?: boolean;
  admin?: boolean;
  update: (action: string) => void;
}

export const UserAuthContext = createContext<Ctxs | null>(null);

const UserAuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { data, status } = useSession();
  // console.log(data, "aaa");
  // console.log(status, "aaaaaaaa");

  const [flag, setFlag] = useState<boolean>();
  const [admin, setAdmin] = useState<boolean>();

  const update = (action: string) => {
    console.log(update);
  };

  return (
    <UserAuthContext.Provider value={{ flag, admin, update }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
