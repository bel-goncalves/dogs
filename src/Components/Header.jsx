import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dog from "../Assets/dogs.svg?react";

const Header = () => {
  return (
    <Header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </Header>
  );
};

export default Header;
