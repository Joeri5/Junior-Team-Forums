import { GetServerSidePropsContext, NextPage } from "next";
import { fetchMutualGuilds } from "../utils/api";
import { Guild } from "../utils/types";

type Props = {
  guilds: Guild[];
};

const menu: NextPage<Props> = ({ guilds }) => {
  console.log(guilds);
  return (
    <>
      {guilds?.map((g) => (
        <div key={g.id}>{g.name}</div>
      ))}
    </>
  );
};

export async function GetServerSideProps(context: GetServerSidePropsContext) {
  return fetchMutualGuilds(context);
}

export default menu;
