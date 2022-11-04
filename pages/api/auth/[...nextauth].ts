import Credentials from "next-auth/providers/credentials";
import mongooseInit from "../../../lib/mongooseInit";
import UserDB from "../../../lib/model/schema/userSchema";
import { compare } from "bcryptjs";
import nextAuth from "next-auth";

export const option = {
  providers: [
    Credentials({
      async authorize(credentials, req) {
        try {
          console.log(credentials, "credentials");
          mongooseInit();
          const one = await UserDB.findOne({ email: credentials!.email });
          const passCheck = await compare(
            credentials!.password,
            one?.password as string
          );

          if (!one || !passCheck) {
            throw new Error("error!!!!!!!!!!!!");
          }
          if (one && passCheck) {
              return { name: one.name; };
          }
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ],
};
export default nextAuth(option);
