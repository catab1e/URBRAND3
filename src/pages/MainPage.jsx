import "./main-page.scss"

import React from 'react';
import Logo from "../components/logo/Logo";
import Search from "../components/search/Search";
import Filter from "../components/filter/Filter";
import Rec from "../components/recomendations/Rec";
import CardsContainer from "../components/product/card/cards/CardsContainer";
import ProductsHeader from "../components/product/products-header/ProductsHeader";
import Footer from "../components/footer/Footer";
import BackUpBtn from "../components/back-up-btn/BackUpBtn";
import InfoPanelUpper from "../components/info-panel/info-panel-upper/InfoPanelUpper";

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="block">
                <Logo />
                <Search />
            </div>
            <Filter />
            <Rec />
            <ProductsHeader />
            <CardsContainer />
            <BackUpBtn />
            <Footer />
        </div>   
    );
};

export default MainPage;