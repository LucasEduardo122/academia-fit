import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        {/* The Header */}
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>O MELHOR CLUBE DE FITNESS DA CIDADE</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">MODELE </span>
            <span>O SEU </span>
          </div>

          <div>
            <span>CORPO IDEAL</span>
          </div>

          <div>
            <span>
            Aqui vamos ajudá-lo a moldar e construir o seu corpo ideal e viver a sua vida ao máximo
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>Treinadores especializados</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>membros</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span>programas fitness</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Iniciar Agora</button>
          <button className="btn">Saber Mais</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Entrar Agora</button>

        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="Heart" />
          <span>Batimento</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="hero_image" className="hero-image" />

        <motion.img
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />
        {/* Calories */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="Calories" />
          <div>
            <span>Calorias Queimadas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
