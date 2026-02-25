import { useState } from "react";
import styles from "./ProjectsBento.module.css";
import SIO from "../solutions/sio/SIOBentoGrid";
import Roraimax from "../solutions/roraimax/RoraimaxBentoGrid";
import UMDT from "../solutions/umdt/UMDTBentoGrid";
import Pagination from "../pagination/Pagination";

const projects = [
  { id: "sio", component: SIO },
  { id: "roraimax", component: Roraimax },
  { id: "umdt", component: UMDT },
];

const ProjectsBento = () => {
  const [index, setIndex] = useState(0);
  const CurrentProject = projects[index].component;

  const handleNext = () => {
    if (index < projects.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className={styles.wrapper}>
      {/* Renderiza el proyecto actual */}
      <CurrentProject />

      {/* El paginador ahora recibirá total={2} */}
      <Pagination
        total={projects.length}
        current={index}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default ProjectsBento;