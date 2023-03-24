import './card-item.scss'
import React from 'react';

import jumper from "../../../assets/img/jumper.png"
import fon from "../../../assets/img/fon.png"
import oneme from "../../../assets/img/oneme.png"

const CardItem = () => {
    return (
        <div className='card-item'>
            <div className='card-item__img'>
                <img className='img' src={oneme} alt="" />
            </div>
            <div className='card-item__descr'>asdasdasdasd</div>
            <div className='card-item__price'>750 som</div>
        </div>
    );
};

export default CardItem;