import Menu from "../../components/menu";
import style from "./firstPage.module.css";
import image12 from "../../image/image12.png"
import {routelink} from "../../routlink/routelink";
import ButtonComponent from "../../components/buttonComponent";
function FirstPage(){
    const { firstPage } = routelink;
return(
    <div>
        <Menu />
<div>
<div className={style.background}>
</div>
<div className={style.center}>
    <img src={image12} />
    <div className={style.text_center}>
    <span>
                            تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و
                            هنر، از دیرباز با شعر و ادبیات درهم پیچیده و ایران،
                            مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و
                            نشیب هایی که در طول تاریخ بر آن گذشته، اما شاهنامه
                            وزین پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و
                            عشق بازی اش با حق، غزل های عاشقانه و عارفانه عالم
                            گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار
                            نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و
                            بزرگش تسکین داده اند.
                        </span>        
<div>
 <ButtonComponent text="فال حافظ" style="backOrange" onClick={()=>window.open(firstPage , '_self')}/>
 <ButtonComponent text="گنجینه اشعار" style="backOrange" onClick={()=> window.open(firstPage, "_self")}/>

</div>
    </div>
</div>
</div>
    </div>
);
}
export default FirstPage;