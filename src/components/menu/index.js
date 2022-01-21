import style from "./menu.module.css";
import logo from "../../image/logo.png";
function Menu(){
return (
<div style={{display:'flex' ,margin: '10px 10px 10px' ,width: '618px'}}>
    <div><img src={logo}/></div>
    <div className={style.menu}>
        <ul>
            <li><a href="/">فال حافظ</a></li>
            <li><a href="/">گنجینه</a></li>
            <li><a href="/">درباره ما</a></li>
        </ul>
    </div>
</div>
    );
}
export default Menu;