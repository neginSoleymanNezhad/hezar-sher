import { useEffect, useState } from "react";
import haafezfaal from "../hafez.json";
import 'whatwg-fetch';
function UseShoara(){
    const [shoara, setshoara] = useState([]);

    useEffect(() => {
        fetch(
            "https://ganjgah.ir/api/ganjoor/poets")
                        .then((res) => res.json())
                        .then((data) => {

                            const sgaeerinfo = [];

                            for (let i = 0; i < data.length; i++) {
                                const poet = data[i];
                                sgaeerinfo.push({
                                    id: poet.id,
                                    name: poet.nickname,
                                    image: `https://ganjgah.ir${poet.imageUrl}`,
                                });
                            }
                            setshoara(sgaeerinfo);

                        })
    }, []);
    console.log({shoara});
    return { shoara };
} 
export default UseShoara;