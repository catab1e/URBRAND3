import "./cards-container.scss"
import React from 'react';
import CardItem from '../card-item/CardItem';


const CardsContainer = () => {
    return (
        <div className='cards-container'>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    );
};

export default CardsContainer;