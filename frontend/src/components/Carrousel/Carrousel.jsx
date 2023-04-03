import React, { useRef } from "react";
import styles from "./Carrousel.module.css";

function Carrousel({ img }) {
  const carruselRef = useRef(null);

  const handleScroll = (direction) => () => {
    const carrusel = carruselRef.current;
    const scrollAmount = carrusel.clientWidth;
    const step = direction === "left" ? -scrollAmount : scrollAmount;
    carrusel.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <div className={styles.carrusel}>
      <div className={styles.arrowOne}>
        <button className={styles.arrowOne} onClick={handleScroll("left")}>
          {"<"}
        </button>
      </div>
      <div ref={carruselRef} className={styles.carruselItems}>
        {img &&
          img.map((e) => (
            <div className={styles.carruselItem} key={e.id}>
              <img src={e.img} alt="" />
            </div>
          ))}
      </div>
      <div className={styles.arrowTwo}>
        <button className={styles.arrowTwo} onClick={handleScroll("right")}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
