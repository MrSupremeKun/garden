import React from "react";
import { motion } from "framer-motion";
import styles from "./pages.module.scss";
import FlowerGirl from "../images/Group 33528.png";
import Plant1 from "../images/plant.jpg";
import Bigplant from "../images/plant 2.jpg";
import PlantOne from "../images/mini plant 1.jpg";
import PlantTwo from "../images/mini plant 2.jpg";
import PlantThird from "../images/mini plant 3.jpg";
import { RiPlantLine } from "react-icons/ri";
import { PiPottedPlantBold } from "react-icons/pi";
import { GiPlantSeed } from "react-icons/gi";
import { AiTwotoneStar, AiOutlineArrowUp } from "react-icons/ai";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__div}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{once: true}}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className={styles.home__about}
          id="Intro1"
        >
          <h1 className={styles.home__text}>
            Make a <span className={styles.home__span}>Beautiful Garden</span>{" "}
            with Your own Hand
          </h1>
          <p className={styles.home__about__text}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form,
          </p>
          <button className={styles.home__button}>Shop now</button>
        </motion.div>
        <div className={styles.img__div}>
          <motion.img
            initial={{ opacity: 0, scale: 0.5, x:200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={FlowerGirl}
            alt="Flowergirl"
            className={styles.home__img}
            id="FlowerGirl"
          />
        </div>
      </div>
      <motion.div 
      initial={{ opacity: 0, scale: 0.5, y: 300 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}className={styles.about__us}>
        <img src={Plant1} alt="" className={styles.about__us__img} />
        <div className={styles.about__us__text__div}>
          <article>We give awesome landscape service</article>
          <p>
            it is a long established fact that a reader will be distracted by
            the thing.
          </p>
        </div>
        <div className={styles.about__us__mini__div}>
          <p className={styles.about__us__number}>25+</p>
          <article>Complete Project per month</article>
        </div>
        <div className={styles.about__us__mini__div}>
          <p className={styles.about__us__number}>10+</p>
          <article>Year practical experience</article>
        </div>
        <div className={styles.about__us__mini__div}>
          <p className={styles.about__us__number}>60+</p>
          <article>Awesome team members</article>
        </div>
      </motion.div>
      <div className={styles.we__are}>
        <img className={styles.we__are__img} src={Bigplant} alt="" />
        <div className={styles.we__are__about}>
          <h2>We Are Professional Gardener! </h2>
          <article>
            Morbi magna metus, scelerisque at risus a, tristique laoreet orci.
            Duis posuere eros vel dui pulvinar, pulvinar molestie erat iaculis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia.
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
          <RiPlantLine className={styles.service__icon} />
          <article>Plant Trees</article>
          <p>
            There are many variations of passages long established fact reader
          </p>
        </div>
        <div className={styles.service__area}>
          <div className={styles.service__single__div}>
            <PiPottedPlantBold className={styles.service__icon} />
            <article>Pruning plants</article>
            <p>
              There are many variations of passages long established fact reader
            </p>
          </div>
          <div className={styles.service__single__div}>
            <GiPlantSeed className={styles.service__icon} />
            <article>Plant Trees</article>
            <p>
              There are many variations of passages long established fact reader
            </p>
          </div>
        </div>
      </div>
      <div>
        <article className={styles.slide__article}>
          Choose your Dream Plant
        </article>
        <p>
          Many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form,
        </p>
        <div className={styles.slide__slidesDiv}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            viewport={{ once: false }}
            className={styles.slide__slides}
          >
            <img src={PlantTwo} alt="" className={styles.slide__image} />
            <div className={styles.slide__blur}>
              <article className={styles.slide__text}>
                Monstera Deliciosa Care
              </article>
              <div className={styles.slide__stars}>
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />
                <p className={styles.star__text}>5.0(120)</p>
              </div>
              <div className={styles.slide__articleFather}>
                <article className={styles.slide__price}>Price:$200</article>
                <button>add to card</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            viewport={{ once: false }}
            className={styles.slide__slides}
          >
            <img src={PlantThird} alt="" className={styles.slide__image} />
            <div className={styles.slide__blur}>
              <article className={styles.slide__text}>
                Indoors Leaf Potted
              </article>
              <div className={styles.slide__stars}>
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />
                <p className={styles.star__text}>5.0(183)</p>
              </div>
              <div className={styles.slide__articleFather}>
                <article className={styles.slide__price}>Price:$150</article>
                <button>add to card</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            viewport={{ once: false }}
            className={styles.slide__slides}
          >
            <img src={PlantOne} alt="" className={styles.slide__image} />
            <div className={styles.slide__blur}>
              <article className={styles.slide__text}>
                Indoors Tropical Plant
              </article>
              <div className={styles.slide__stars}>
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />{" "}
                <AiTwotoneStar className={styles.slide__star} />
                <p className={styles.star__text}>5.0(134)</p>
              </div>
              <div className={styles.slide__articleFather}>
                <article className={styles.slide__price}>Price:$150</article>
                <button>add to card</button>
              </div>
            </div>
          </motion.div>
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
      <a className={styles.Link} href="#Intro1"><AiOutlineArrowUp/>Wanna Up</a>
    </div>
  );
}

export default Home;
