import React from "react";
import { FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.instagram.com/buenavibra.ceramica/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} /> <h3>buenavibra.ceramica</h3>
      </a>
    </footer>
  );
};

export default Footer;
