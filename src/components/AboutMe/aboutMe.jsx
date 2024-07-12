import React from 'react'
import styles from './aboutMe.module.css';

import gitHubIcon from '../../assets/Icons/github.svg'
import linkedinIcon from '../../assets/Icons/linkedin.svg'
import instagramIcon from '../../assets/Icons/instagram.svg'
import youtubeIcon from '../../assets/Icons/youtube.svg'
import teste from '../../pdf/testeD.png'

export default function aboutMe() {
  return (
    <>
      <section id="about_me" className={styles.about_me}>
        <div className="container" style={{ marginTop: "50px" }}>
            <div className="row">
                <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: "100px 0"}}>
                    <div className={styles.about_me_text}>
                        <h2 className={styles.title_section} style={{marginBottom: "40px"}}>Sobre Mim</h2>
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                            São Paulo, Brasil
                        </p>
                        <p className={styles.description} style={{ width: "80%" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nesciunt cupiditate atque officiis ipsum nostrum facere ad eveniet architecto perferendis impedit a, nemo culpa deleniti. Labore itaque accusamus exercitationem minus!
                        </p>
                    </div>
                    <div className={styles.about_me_social_links}>
                        <a href="https://github.com/oRaPhael-bot">
                        <img src={gitHubIcon} alt="GitHub" /></a>
                        <a href="https://www.linkedin.com/in/raphael-teves-maia-c/">
                        <img src={linkedinIcon} alt="LinkedIn" /></a>
                        <a href="https://github.com/oRaPhael-bot">
                        <img src={instagramIcon} alt="Instagram" /></a>
                        <a href="https://github.com/oRaPhael-bot">
                        <img src={youtubeIcon} alt="YouTube" />
                        </a>
                    </div>
                    <div className={styles.buttons_about}>
                      <button className={styles.curriculum_btn}
                      >
                        <a href={teste} download='testeDownload'>Baixar currículo</a>
                      </button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
