import styles from "./shaerbox.module.css";
function ShaerBox(props){
    const { link, imageURL, title } = props;

return (
    <a href={link} target="_blank">
    <div className={styles.container}>
        <img src={imageURL} alt={title} />
        <p>{title}</p>
    </div>
</a>
)
}
export default ShaerBox;