import React from "react";
import styles from "./footer.module.scss";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import Group2 from "../../images/Group (4).svg";
import Group3 from "../../images/Group (5).svg";
import Group4 from "../../images/Group (6).svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.aboutbox}>
        <div className={styles.aboutbox__One}>
          <h4 className={styles.aboutbox__One_h}>Hobby</h4>
          <p className={styles.aboutbox__One_text}>
            There are many variations of pass is ages of Lorem available, but
            the majority have suffered alteration in injected humour.
          </p>
          <div className={styles.aboutbox__One_links}>
            <FaFacebookF className={styles.aboutbox__One_link} />
            <BsTwitter className={styles.aboutbox__One_link} />
            <FaPinterestP className={styles.aboutbox__One_link} />
            <TfiLinkedin className={styles.aboutbox__One_link} />
          </div>
        </div>
        <div className={styles.aboutbox__Two}>
          <article className={styles.aboutbox__Two_article}>Company</article>
          <p className={styles.aboutbox__Two_links}>About</p>
          <p className={styles.aboutbox__Two_links}>History</p>
          <p className={styles.aboutbox__Two_links}>Vision&Mission</p>
          <p className={styles.aboutbox__Two_links}>Career</p>
          <p className={styles.aboutbox__Two_links}>Legal Notice</p>
          <p className={styles.aboutbox__Two_links}>Blog&News</p>
        </div>
        <div className={styles.aboutbox__Two}>
          <article className={styles.aboutbox__Two_article}>Support</article>
          <p className={styles.aboutbox__Two_links}>Contact</p>
          <p className={styles.aboutbox__Two_links}>FAQ</p>
          <p className={styles.aboutbox__Two_links}>Help Center</p>
          <p className={styles.aboutbox__Two_links}>Privacy Policy</p>
          <p className={styles.aboutbox__Two_links}>Term & Service</p>
          <p className={styles.aboutbox__Two_links}>Community</p>
        </div>
        <div className={styles.aboutbox__Third}>
          <article className={styles.aboutbox__Third_article}>Contact</article>
          <p className={styles.aboutbox__Third_text}>
            Mirabazar-Subhanighat Rd, Sylhet-Bangladesh
          </p>
          <article className={styles.aboutbox__Third_article}>Email Us</article>
          <p className={styles.aboutbox__Third_text}>useremail@gmail.com</p>
          <article className={styles.aboutbox__Third_article}>Call Us</article>
          <p className={styles.aboutbox__Third_text}>+998900189806</p>
        </div>
      </div>
      <div className={styles.flowers}>
        <img src={Group4} alt="" className={styles.flower} />
        <img src={Group2} alt="" className={styles.flower} />
        <img src={Group3} alt="" className={styles.flower} />
        <img src={Group4} alt="" className={styles.flower} />
      </div>
    </div>
  );
}

export default Footer;
