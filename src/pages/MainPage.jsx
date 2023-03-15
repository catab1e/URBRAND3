import "./main-page.scss"

import React from 'react';
import Logo from "../components/logo/Logo";
import Search from "../components/search/Search";
import Filter from "../components/filter/Filter";
import Rec from "../components/recomendations/Rec";
import CardsContainer from "../components/product/card/cards/CardsContainer";

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="block">
                <Logo />
                <Search />
            </div>
            <Filter />
            <Rec />
            <CardsContainer />
        </div>   
    );
};

export default MainPage;