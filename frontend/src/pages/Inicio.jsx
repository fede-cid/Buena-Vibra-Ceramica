import PlatoDestacado from "../components/platodestacado/PlatoDestacado";
import HorarioAtencion from "../components/horario/HorarioAtencion";
import ContainerCards from "../components/cards/container/ContainerCards";
import Catalogo from "../components/Catalogo/Catalogo";

const Inicio = ({data}) => {
  return (
    <>
      <ContainerCards data={data} />
      <HorarioAtencion />
      <PlatoDestacado />
      <Catalogo/>
    </>
  );
};

export default Inicio;
