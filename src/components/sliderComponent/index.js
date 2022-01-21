import React from "react";
import Slider from "react-slick";
import ShaerBox from "../shaerBox";
import {routelink} from "../../routlink/routelink";

function SliderComponent(props) {
    const {shoara} = props;
    const {shaer} = routelink;
    var settings = {
        arrows: true,
        slidesToShow: 5,
        centerMode: true,
        responsive: [{
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }]
      };
    return(
        
<Slider {...settings} >
{shoara.map((poet) => {
                            const { id, name, image } = poet;
                            return (
                                <ShaerBox
                                    key={`poet-${name}`}
                                    title={name}
                                    imageURL={image}
                                    link={`${shaer}/${id}`}
                                />
                            );
                        })}
    </Slider>
    );

}
export default SliderComponent;
