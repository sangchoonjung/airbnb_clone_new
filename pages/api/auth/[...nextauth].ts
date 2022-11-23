import { compare } from "bcryptjs";
import nextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongooseInit from "../../../lib/mongooseInit";
import UserDB from "../../../lib/model/schema/userSchema";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
//NextAuthOptions 양식사용해줘야함
export const option: NextAuthOptions = {
  //유형별 페이지 렌더링하기
  pages: {
    // error: "/auth/error",
  },
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
          `${process.env.SERVER_ADDRESS}/api/userApi/confirmPassApi`,
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
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    //signIn을 통해 들어왔을때,
    async signIn({ account, user }) {
      //params 라는 프로퍼티 객체 안에 여러가지 데이터가있다.
      // console.log(params);
      // throw new Error("NotEnough");
      // return false; //인증거절
      // const { email } = params.user;

      console.log(account, "account..........");
      if (account?.provider === "credentials") {
        //바로 통과시키기
        return true;
      }
      if (account?.provider === "google") {
        //아이디 중복확인 해보기
        const response = await fetch(
          `${process.env.SERVER_ADDRESS}/api/userApi/loginApi`,
          {
            method: "POST",
            body: JSON.stringify({ email: user.email }),
            headers: { "Content-type": "application/json" },
          }
        );
        const data = await response.json();
        //등록된 이메일이 없는경우,가입시키기
        if (data.result === false) {
          //한글값때문에 Location이라는 에러가 터지니 url인코딩을 해줘야한다.
          const params = new URLSearchParams();
          params.append("name", user.name!);
          params.append("email", user.email!);
          params.append("provider", account?.provider!);
          params.append("providerAccountId", account?.providerAccountId!);

          return "/social/socialJoin?" + params.toString();
        } else {
          //등록된 이메일이 있는경우,로그인시키기
          const response = await fetch(
            `${process.env.SERVER_ADDRESS}/api/userApi/socialLogin`,
            {
              method: "POST",
              body: JSON.stringify({
                providerAccountId: account.providerAccountId,
                provider: account.provider,
              }),
              headers: { "Content-type": "application/json" },
            }
          );
          const data = await response.json();
          if (data.result) {
            console.log(data, "구글데이터 리턴값");
            return true;
          }
        }
      }
      return false;
    },
  },
};
export default nextAuth(option);
