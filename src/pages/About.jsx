import React from "react";
import { motion } from "framer-motion";
import AboutPlant from "../images/About Plant.jpg";
import styles from "./about.module.scss";
import { BsPlayCircleFill } from "react-icons/bs";
import Bordered2 from "../images/borderedplant.jpg";
import Bordered1 from "../images/bordered1.jpg";
import Carousel from "../components/carousel";
import { Link } from "react-router-dom";
import {AiOutlineArrowUp} from 'react-icons/ai'

function About() {
  return (
    <div className={styles.about}>
      <div id="Intro" className={styles.Header}>
        <motion.div
          whileInView={{ x: 100 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 2 }}
          className={styles.Intro}
        >
          <article className={styles.Intro_Article}>DECORATE YOUR HOME</article>
          <h1 className={styles.Intro_Text}>
            <span>Feel your home</span> with a modern design space
          </h1>
          <div className={styles.Intro_Watch}>
            <button className={styles.Intro_Watch_Button}>Discover</button>
            <p className={styles.Intro_Watch_Text}>
              <BsPlayCircleFill />
              Watch Video
            </p>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          viewport={{ once: true }}
          src={AboutPlant}
          alt=""
          className={styles.Header_Img}
        />
      </div>
      <div className={styles.Importance}>
        <img src={Bordered1} alt="" />
        <div className={styles.Importance_Div}>
          <article className={styles.Importance_Div_Article}>
            Think’s important <span>Flowers in your area</span>{" "}
          </article>
          <p className={styles.Importance_Div_Text}>
            People have been using natural objects, such as tree stumps, rocks
            and moss, as furniture since thebeginning of human civilisation.{" "}
          </p>
          <button className={styles.Importance_Div_Button}>Read More</button>
        </div>
      </div>
      <div className={styles.Importance}>
        <div className={styles.Importance_Div}>
          <article className={styles.Importance_Div_Article}>
          Decorate your home with a <span>variety of flowers </span>{" "}
          </article>
          <p className={styles.Importance_Div_Text}>
            People have been using natural objects, such as tree stumps, rocks
            and moss, as furniture since thebeginning of human civilisation.{" "}
          </p>
          <button className={styles.Importance_Div_Button}>Read More</button>
        </div>
        <img src={Bordered2} alt="" />
      </div>
      <div className={styles.carousel}>
        <article>More Value from this Flowers </article>
        <p>Special Deals</p>
      </div>
      <Carousel title={'Flowers'}/>
      <div className={styles.Importance}>
        <div className={styles.Importance_Div}>
          <article className={styles.Importance_Div_Article}>
          Let’s try to campaign flowers <span>decoration in your home</span>{" "}
          </article>
          <p className={styles.Importance_Div_Text}>
            People have been using natural objects, such as tree stumps, rocks
            and moss, as furniture since thebeginning of human civilisation.{" "}
          </p>
          <button className={styles.Importance_Div_Button}>Read More</button>
        </div>
        <img src={Bordered2} alt="" />
      </div>
      <a className={styles.Link} href="#Intro"><AiOutlineArrowUp/>Wanna Up</a>
    </div>
  );
}

export default About;
