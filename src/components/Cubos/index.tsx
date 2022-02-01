import { Image } from 'native-base';
import React, { FC } from 'react';
import { ICapsules } from '../../models/interfaces/components/Capsules';

const Cubos : FC<ICapsules> = (props) => {
    const { color, style } = props;

    return (
        <React.Fragment>
            {
                color === "blue"
                    ? <Image source={require("../../assets/images/BlueCubo.png")} alt="Red Capsule" style={style}/>
                    : color === "rose"
                        ? <Image source={require("../../assets/images/RoseCubo.png")} alt="Blue Capsule" style={style}/>
                        : color === "black"
                            ? <Image source={require("../../assets/images/BlackCubo.png")} alt="Purple Capsule" style={style}/>
                            : <Image source={require("../../assets/images/OrangeCubo.png")} alt="Yellow Capsule" style={style}/>
            }
        </React.Fragment>
    );
};

export default Cubos;
