import { Image } from 'native-base';
import React, { FC } from 'react';
import { ICapsules } from '../../models/interfaces/components/Capsules';

const CapsulesActive : FC<ICapsules> = (props) => {
    const { color, style } = props;

    console.log(color)

    return (
        <React.Fragment>
            {
                color === "red"
                    ? <Image source={require("../../assets/images/RedActivado.png")} alt="Red Capsule" style={style}/>
                    : color === "blue"
                        ? <Image source={require("../../assets/images/BlueCapsule.png")} alt="Blue Capsule" style={style}/>
                        : color === "purple"
                            ? <Image source={require("../../assets/images/PurpleCapsule.png")} alt="Purple Capsule" style={style}/>
                            : color === "yellow"
                                ? <Image source={require("../../assets/images/YellowCapsule.png")} alt="Yellow Capsule" style={style}/>
                                : <Image source={require("../../assets/images/GreenCapsule.png")} alt="Green Capsule" style={style}/>
            }
        </React.Fragment>
    );
};

export default CapsulesActive;
