import { Image } from 'native-base';
import React, { FC } from 'react';
import { ICapsules } from '../../models/interfaces/components/Capsules';

const Bubble : FC<ICapsules> = (props) => {
    const { color, style } = props;

    return (
        <React.Fragment>
            {
                color === "green"
                    ? <Image source={require("../../assets/images/GreenBubble.png")} alt="Red Capsule" style={style}/>
                    : color === "orange"
                        ? <Image source={require("../../assets/images/OrangeBubble.png")} alt="Blue Capsule" style={style}/>
                        : color === "coffee"
                            ? <Image source={require("../../assets/images/CoffeeBubble.png")} alt="Purple Capsule" style={style}/>
                            : <Image source={require("../../assets/images/RoseBubble.png")} alt="Yellow Capsule" style={style}/>
            }
        </React.Fragment>
    );
};

export default Bubble;
