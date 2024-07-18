import React from "react";

import styles from "./home.module.css";

import Perfil from "../../assets/img/Perfil.jpeg";

import Header from "../../components/Header/header.jsx";
import AboutMe from "../../components/AboutMe/aboutMe.jsx";
import Experiencies from "../../components/Experiences/experiences.jsx";
import Footer from "../../components/Footer/footer";
import Projects from "../../components/Projects/project.jsx";
import ButtonScrolling from "../../components/ButtonScrolling/ButtonScrolling.jsx";

export default function home() {
  return (
    <>
      <Header />
      <section id="home" className={styles.home}>
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <h2 className={styles.title}>Olá, eu sou</h2>
                <h1 className={styles.title_name}>Raphael Maia</h1>
                <h3 className={styles.title_description}>
                  Desenvolvedor Web Full-Stack.
                </h3>
                <div className={styles.buttons}>
                  <button className={styles.home_button_github}>
                    <a href="https://github.com/oRaPhael-bot" target="_blank">
                      GitHub
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.home_img}>
                <img className="img-fluid" src={Perfil} alt="theme" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutMe />
      <Experiencies />
      <Projects />
      <Footer />
      <ButtonScrolling />
    </>
  );
}
