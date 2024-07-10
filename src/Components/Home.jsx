import React from "react";
import styles from "./Footer.module.css";
import Feed from "./Feed/Feed";
import Loading from "./Helper/Loading";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Homepage, feed de fotos." />
      <Feed />
    </section>
  );
};

export default Home;
