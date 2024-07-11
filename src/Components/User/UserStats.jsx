import React from "react";
import Head from "../Helper/Head";
import { useFetch } from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../../Components/Helper/Loading";
import Error from "../../Components/Helper/Error";
import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <section>
        <Head title="Estatísticas" description="Estatísticas." />
        <p>User stats</p>
        <UserStatsGraphs data={data} />
      </section>
    );
  } else return null;
};

export default UserStats;
