
import style from "./ContainerCards.module.css";

import Carrousel from "../../Carrousel/Carrousel";

const ContainerCards = ({data}) => {

  return (
    <>
      <div className={style.title}>
        <h1>Nuestros Productos Recomendados</h1>
      </div>
      {data&& <Carrousel img={data} />}

    </>
  );
};

export default ContainerCards;
