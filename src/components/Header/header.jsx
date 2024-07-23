import React from "react";
import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <header id="header_section" className="container">
        <div className="row">
          <div style={{ display: "flex", margin: "30px 0" }}>
            <div className="col-md-6">
              <h1 className={styles.header_title}>Portfólio</h1>
            </div>
            <div className="col-md-6">
              <div className={styles.header_menu}>
                <button className={styles.hambuger_button} onClick={toggleMenu}>
                  ☰
                </button>
                <ul
                  className={`${styles.header_menu_list} ${
                    showMenu ? styles.active : ""
                  }`}
                >
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "#FFFFFF" }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about_me"
                      style={{ textDecoration: "none", color: "#FFFFFF" }}
                    >
                      Sobre Mim
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experiences"
                      style={{ textDecoration: "none", color: "#FFFFFF" }}
                    >
                      Experiência
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      style={{ textDecoration: "none", color: "#FFFFFF" }}
                    >
                      Projetos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "1px", backgroundColor: "#151515" }}></div>
      </header>
    </>
  );
}
