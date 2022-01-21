import styles from "./shaer.module.css";
import { useEffect, useState , useCallback } from "react";
import Usepoem from "../../hook/usepoem";
import { useParams } from "react-router-dom";
import Poemcomponent from "../../components/poemComponent";
function Shaer(){
    const { id } = useParams();
    const { name, refresh, image, title, poem,info,} = Usepoem(id);
    return(
        <div className={styles.main}>
            <div className={styles.orangediv}>
                <Poemcomponent image={image} title={title} poem={poem} />
            </div>
            <div className={styles.bluediv}>
                {info}
            </div>
</div>
    )
}

export default Shaer;
