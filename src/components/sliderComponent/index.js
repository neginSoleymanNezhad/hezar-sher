import React from "react";
import Slider from "react-slick";
import ShaerBox from "../shaerBox"
function SliderComponent(props) {
    const {shoara} = props;
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
                                    link={`${shoara}/${id}`}
                                />
                            );
                        })}
    </Slider>
    );

}
export default SliderComponent;
