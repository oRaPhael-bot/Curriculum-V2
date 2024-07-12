import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header id="header_section" className="container">
        <div className="row">
          <div className={styles.header}>
            <div className="col-md-6">
              <h1 className={styles.header_title}>Portfólio</h1>
            </div>
            <div className="col-md-6">
              <div className={styles.header_menu}>
                <ul className={styles.header_menu_list}>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "#ffffff" }}
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
