import styles from "./faalcomponent.module.css";
import ButtonComponent from "../buttonComponent";
function Faalcomponent(props){
    const { title, poems, Interpretation, voice} =
    props;
    return (
        <div>
            <div className={styles.main}>
<div className="styles.poemMain">
<div>
<div className={styles.poemContainer}>
                    <p className={styles.title}>{title}:</p>
                    <div className={styles.poem}>
                        {poems.map((couplet, coupletIndex) => {
                            return (
                                <div
                                    key={`couplet-${coupletIndex}`}
                                    className={styles.couplet}
                                >
                                    {couplet.map((verse, verseIndex) => {
                                        return (
                                            <div
                                                key={`verse-${coupletIndex}-${verseIndex}`}
                                                className={styles.verse}
                                            >
                                                {verse}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>{" "}
                    <audio src={voice} controls/>
                 
        </div>
        <div>
        <div className={styles.InterpretationMain}>
            <p>ای صاحب فال:</p>
            {Interpretation}</div>
        </div>
        <ButtonComponent text="بازگشت به صفحه اصلی" style="backgray" onClick={()=>window.open('/' , '_self')}/></div>
</div>
            </div>
        </div>
    );
} 
export default Faalcomponent;