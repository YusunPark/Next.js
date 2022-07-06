import Seo from "../../components/Seo";
import { NextRouter, useRouter } from "next/router";

import { InferGetServerSidePropsType, GetServerSideProps } from "next";

type MovieDetailParams = [string, string] | [];

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router: NextRouter = useRouter();
  console.log(router);
  const [title, id] = params || ([] as MovieDetailParams);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (params) => {
  return {
    props: {
      params,
    },
  };
};
