import Estilo from './HorarioAtencion.module.css';

const HorarioAtencion = () => {
  return (  
    <div className={Estilo.ContenedorHero}>
      <h2>Horarios de atención</h2>
      <div className={Estilo.ContenedorHorario}>
        <div>
          <span>lunes</span>
          <span>martes</span>
          <span>miércoles</span>
          <span>jueves</span>
          <span>viernes</span>
          <span>sábado</span>
          <span>domingo</span>
        </div>
        <div>
          <span>9am - 8pm</span>
          <span>9am - 8pm</span>
          <span>9am - 8pm</span>
          <span>9am - 10pm</span>
          <span>9am - 10pm</span>
          <span>9am - 8pm</span>
          <span>no hay servicio</span>
        </div>
      </div>
    </div>
  );
}
 
export default HorarioAtencion;