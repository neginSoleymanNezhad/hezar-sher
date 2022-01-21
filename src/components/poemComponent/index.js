import styles from "./poemcomponent.module.css"
function Poemcomponent(props){
    const {title , poem , image} = props;
return(
<div className={styles.container}>
    <img className={styles.imgInfo} src={image}/>
    <div className={styles.title}>{title}</div>
    <div className={styles.poem}>
                        {poem.map((couplet, coupletIndex) => {
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
</div>

    );
}
export default Poemcomponent;