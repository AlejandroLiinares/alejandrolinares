import { useState } from "react";
import styles from "./BentoGrid.module.css";

import SIO from "../solutions/sio/SIOBentoGrid";
import Pagination from "../pagination/Pagination";

const projects = [
  { id: "sio", component: SIO },
];

const BentoGrid = () => {
  const [index, setIndex] = useState(0);

  const CurrentProject = projects[index].component;

  // ✅ AGREGAR ESTO
  const handleNext = () => {
    setIndex((prev) =>
      prev === projects.length - 1 ? prev : prev + 1
    );
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? prev : prev - 1
    );
  };

  return (
    <div className={styles.wrapper}>
      <CurrentProject />

      <Pagination
        total={projects.length}
        current={index}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default BentoGrid;
