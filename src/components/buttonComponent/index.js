import styles from "./button.module.css";
function ButtonComponent(props){
    const {text , style , onClick} = props;
return (
<button style={{marginTop: '33px'}} className={styles[style]} onClick={onClick}>
    {text}
</button>
    );
}
export default ButtonComponent;