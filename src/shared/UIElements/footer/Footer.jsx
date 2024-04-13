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
      <p>This website was created by Tanju Özer for educational purpose.</p>
    </footer>
  );
}

export default Footer;
