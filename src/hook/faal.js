import { useEffect, useState } from "react";
import haafezfaal from "../hafez.json";
import 'whatwg-fetch';
function Usefaal(){
    const changepoem = [];
    const [voice , fixvoice] = useState("");
    const [title , fixtitle] = useState("");
    const [poems , fixpoem] = useState([]);
    const [Interpretation, setInterpretation] = useState("");
    useEffect(() => {
    fetch("https://ganjgah.ir/api/ganjoor/hafez/faal").then((res)=>res.json()).then((response)=>{
        const { title, verses, recitations } = response;
        verses.forEach((verse, index) => {
            if (index % 2 === 0) {
         return  changepoem.push([verse.text]);
            }
            return  changepoem[changepoem.length - 1].push(verse.text);

        });
        const poem = changepoem;
        fixpoem(poem);
        const intr = haafezfaal.find((each) => {
            for (let i = 0; i < poem.length; i++) {
                for (let j = 0; j < poem[i].length; j++) {
                    if (each.poem.includes(poem[i][j])) {
                
                        return true ;

                    }
                }
            }
        });
        const Interpretatin =intr.interpretation;
        setInterpretation(Interpretatin);
        fixtitle(title);
        fixvoice(recitations[0].mp3Url);

 
    })
    }, []);
    return {voice , title , poems , Interpretation };
} 
export default Usefaal;