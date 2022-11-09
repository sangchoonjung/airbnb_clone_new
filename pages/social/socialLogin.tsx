import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import JoinInput from "../../components/userCompo/joinInput";

export default function AuthError(props: any) {
  const router = useRouter();
  // console.log(router.query.email);

  return <h2>이미 사용중인 이메일입니다.</h2>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log(context.query, "서버사이드");

  return {
    props: {},
  };
};
