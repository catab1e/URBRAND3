import './filter.scss'
import React from 'react';

const Filter = () => {
    return (
        <div className='filter'>
            <div className='filter__item'>МУЖЧИНАМ</div>
            <div className='filter__item'>ЖЕНЩИНАМ</div>
            <div className='filter__item'>ДЕТЯМ</div>
            <div className='filter__item'>ПОДАРКИ</div>
            <div className='filter__item'>ВЫШИВКА</div>
            <div className='filter__item'>SALE</div>
            <div className='filter__item'>НОВИНКИ</div>
            <div className='filter__item'>СПОРТ</div>
        </div>
    );
};

export default Filter;