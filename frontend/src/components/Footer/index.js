import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

 const Footer = (props, context) => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>{context.t("About Us")}</li>
          <li className={styles.listItem}>{context.t("Support")}</li>
          <li className={styles.listItem}>{context.t("Blog")}</li>
          <li className={styles.listItem}>{context.t("Press")}</li>
          <li className={styles.listItem}>{context.t("API")}</li>
          <li className={styles.listItem}>{context.t("Jobs")}</li>
          <li className={styles.listItem}>{context.t("Privacy")}</li>
          <li className={styles.listItem}>{context.t("Terms")}</li>
          <li className={styles.listItem}>{context.t("Directory")}</li>
          <li className={styles.listItem}>{context.t("Language")}</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copyright}>© 2018 Brice_julie_gram</span>
    </div>
  </footer>
);

  Footer.contextTypes = {
     t: PropTypes.func.isRequired
   };

 export default Footer;