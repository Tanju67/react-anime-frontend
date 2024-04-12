import styles from "./Footer.module.css";
import FooterNav from "./FooterNav";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterNav />
        <SocialMedia />
      </div>
    </footer>
  );
}

export default Footer;
