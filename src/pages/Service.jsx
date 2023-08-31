import React from "react";
import { motion } from "framer-motion";
import styles from "./pages.module.scss";
import showel from '../images/showel.jpg'
import Help1 from '../images/help 1.jpg'
import Help2 from '../images/help 2.jpg'
import Help3 from '../images/help 3.jpg'
import Aloe from '../images/Aloe.jpg'
import {AiOutlineArrowUp} from 'react-icons/ai'

function Service() {
  return (
    <div className={styles.home}>
      <motion.div 
      initial={{ opacity: 0, scale: 0, y: -200 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{once: false}}
      transition={{
        duration: 1,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={styles.home__div}
    id="Intro2">
        <div className={styles.home__about}>
          <h1 className={styles.home__text}>
            we have over<span className={styles.home__span}>300 hundred</span>{" "}
            companies around world
          </h1>
          <p className={styles.home__about__text}>
            we work with 100,000 people by the world
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iure.
          </p>
          <button className={styles.service_Button}>Shop now</button>
        </div>
        <div className={styles.img__div}>
          <img
            src={Aloe}
            alt="Flowergirl"
            className={styles.service_img}
            id="FlowerGirl"
          />
        </div>
      </motion.div>
      <div className={styles.we__are}>
        <img className={styles.we__are__img} src={showel} alt="" />
        <div className={styles.we__are__about}>
          <h2>Our services are the best in the world ! </h2>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos rem alias ipsa qui delectus repudiandae blanditiis fuga reiciendis distinctio aperiam pariatur fugiat obcaecati, magni, reprehenderit, vel possimus in odio nobis officia eos expedita similique!
          </article>
          <button>Read more</button>
        </div>
      </div>
      <div className={styles.service}>
        <div className={styles.service__first_div}>
          <article>Professional Service</article>
          <p>
            There are many variations of passages of Lorem Ipsum available, Duis
            posuere eros vel dui pulvinar, pulvinar molestie erat iaculis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posue Mauris vel auctor enim many variations. There are many
            variations of passages of Lorem Ipsum .
          </p>
          <button className={styles.home__button}>Read More</button>
        </div>
        <div className={styles.service__single__div}>
          <img src={Help1} alt="" className={styles.plant_Img} />
          <article>Plant Trees</article>
          <p>
            There are many variations of passages long established fact reader
          </p>
        </div>
        <div className={styles.service__area}>
          <div className={styles.service__single__div}>
          <img src={Help2} alt="" className={styles.plant_Img} />
            <article >Pruning plants</article>
            <p>
              There are many variations of passages long established fact reader
            </p>
          </div>
          <div className={styles.service__single__div}>
          <img src={Help3} alt="" className={styles.plant_Img} />
            <article >Plant Trees</article>
            <p>
              There are many variations of passages long established fact reader
            </p>
          </div>
        </div>
      </div>
      <div className={styles.input}>
        <article className={styles.input__article}>
          Ready to bring idea for your garden?
        </article>
        <p className={styles.input__text}>
          I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
        </p>
        <div className={styles.input__Box}>
          <input
            type="text"
            className={styles.input__input}
            required
            aria-label="enter your email"
          />
          <button className={styles.input__button}>subscribe</button>
        </div>
      </div>
      <a className={styles.Link} href="#Intro2"><AiOutlineArrowUp/>Wanna Up</a>

    </div>
  );
}

export default Service