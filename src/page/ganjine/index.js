import SliderComponent from "../../components/sliderComponent";
import styles from "./ganjine.module.css";
import UseShoara from "../../hook/shoara";
import image12 from "../../image/12.png"
function Ganjine(){
    const {shoara} = UseShoara();
return (
    <div className={styles.main}>
<div className={styles.orangediv}>
    <img src={image12} className={styles.image12} />
</div>
<div className={styles.bluediv}></div>
<div className={styles.sliderdiv}> 
<SliderComponent shoara={shoara} />    

</div>
            </div>)
}
export default Ganjine;