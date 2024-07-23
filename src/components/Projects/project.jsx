import styles from "./project.module.css";

import CardProjects from "../CardsProjects/cardProjects";

import projects from "./project";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "100px" }}>
            <h2 className={styles.title_section}>Projetos</h2>
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-6">
            <CardProjects
              imgProject={projects[0].imagem}
              nameProject={projects[0].name}
              descriptionProject={projects[0].description}
              technologiesProject={projects[0].technologies}
              linkProject={projects[0].linkProject}
              linkRepository={projects[0].linkRepository}
            />
            <CardProjects
              imgProject={projects[1].imagem}
              nameProject={projects[1].name}
              descriptionProject={projects[1].description}
              technologiesProject={projects[1].technologies}
              linkProject={projects[1].linkProject}
              linkRepository={projects[1].linkRepository}
            />
          </div>
          <div className="col-md-6">
            <CardProjects
              imgProject={projects[2].imagem}
              nameProject={projects[2].name}
              descriptionProject={projects[2].description}
              technologiesProject={projects[2].technologies}
              linkProject={projects[2].linkProject}
              linkRepository={projects[2].linkRepository}
            />
            <CardProjects
              imgProject={projects[3].imagem}
              nameProject={projects[3].name}
              descriptionProject={projects[3].description}
              technologiesProject={projects[3].technologies}
              linkProject={projects[3].linkProject}
              linkRepository={projects[3].linkRepository}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
