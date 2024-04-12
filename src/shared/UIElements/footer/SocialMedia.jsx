import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import styles from "./SocialMedia.module.css";

function SocialMedia() {
  return (
    <div className={styles.icons}>
      <FaInstagram />
      <FaSquareXTwitter />
      <FaFacebookSquare />
      <FaLinkedin />
    </div>
  );
}

export default SocialMedia;
