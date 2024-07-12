import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.footer_text}>
              <p>@ 2024 - Raphael Maia</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <p>
                  Powered by
                </p>
                <p style={{ color: "#BF91F9", fontWeight: "bold"}}>{"{ )"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
