import { Image } from 'native-base';
import React, { FC } from 'react';
import { ICapsules } from '../../models/interfaces/components/Capsules';

const Body : FC<ICapsules> = (props) => {
    const { color, style } = props;

    return (
        <React.Fragment>
            {
                color === "red"
                    ? <Image source={require("../../assets/images/RedBody.png")} alt="Red Capsule" style={style}/>
                    : color === "blue"
                        ? <Image source={require("../../assets/images/Blue1.png")} alt="Blue Capsule" style={style}/>
                        : color === "purple"
                            ? <Image source={require("../../assets/images/Morado2.png")} alt="Purple Capsule" style={style}/>
                            : color === "yellow"
                                ? <Image source={require("../../assets/images/RedYellow.png")} alt="Yellow Capsule" style={style}/>
                                : <Image source={require("../../assets/images/RedYellow.png")} alt="Green Capsule" style={style}/>
            }
        </React.Fragment>
    );
};

export default Body;
