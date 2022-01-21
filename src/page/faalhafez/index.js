import Faalcomponent from "../../components/faalComponent";
import styles from "./faalhafez.module.css";
import Usefaal from "../../hook/faal";

function Faalhafez(){
    const {title , poems , Interpretation , voice } = Usefaal();
return(
    <div className={styles.backgroundfaal}>
    <div>
    <Faalcomponent title={title} poems={poems} Interpretation={Interpretation}  voice={voice}/>
      
    </div>
    </div>
)
}
export default Faalhafez;
