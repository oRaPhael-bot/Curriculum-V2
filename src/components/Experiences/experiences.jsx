import styles from "./experiences.module.css";

import { useState } from "react";

import topics from "./experiences.js";

export default function Experiencies() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <section id="experiences" className={styles.experiences}>
      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-md-12">
            <h1 className={styles.title_section}>Experiência</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div>
              <nav className={styles.experiences_nav}>
                <ul className={styles.experiences_nav_list}>
                  {topics.map((e) => (
                    <li
                      key={e.id}
                      className={`${styles.experiences_nav_item} ${
                        selectedTopic.id === e.id ? styles.active : ""
                      }`}
                      onClick={() => setSelectedTopic(e)}
                    >
                      {e.titleLi}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-md-9">
            <div className={styles.experience_content}>
              {selectedTopic && (
                <>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2 className={styles.title}>{selectedTopic.titleDesc}</h2>
                    <p className={styles.date}>{selectedTopic.ano}</p>
                  </div>
                  <h3 
                  className="styles.sub_title" 
                  style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    {selectedTopic.sub_title}
                  </h3>
                  <p className={styles.description}>
                    {selectedTopic.description}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
