import { compare } from "bcryptjs";
import nextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongooseInit from "../../../lib/mongooseInit";
import UserDB from "../../../lib/model/schema/userSchema";
import GoogleProvider from "next-auth/providers/google";

export const option = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
        email: { label: "email", type: "email" },
      },
      async authorize(credentials, req) {
        console.log(credentials, "aaaaaaaaaaaaaaa");
        const response = await fetch(
          "http://localhost:3000/api/userApi/confirmPassApi",
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials!.email,
              password: credentials!.password,
            }),
            headers: { "Content-type": "application/json" },
          }
        );
        const data: any = await response.json();
        console.log("!!!!!!!!!!!!!!!!!!", data);
        if (data) {
          const user: User = {
            email: data.message.email,
            id: data.message.name,
          };
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
export default nextAuth(option);
