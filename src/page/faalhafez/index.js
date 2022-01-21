import Faalcomponent from "../../components/faalComponent";
import style from "./faalhafez.module.css";
import faal from "../../hook/faal";
function Faalhafez(){
    const {title , poem , Interpretation , voice } = faal();
return(
    <div className={style.backgroundfaal}>
        <Faalcomponent faaltitle={title} faalpoem={poem} faalInterpretation={Interpretation}  faalvoice={voice}/>
    </div>
)
}
export default Faalhafez;
