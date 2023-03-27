import "./rec.scss";
import React from "react";

import orange from "../assets/img/orange.png";
import oneme from "../assets/img/oneme.png";
import AI from "../assets/img/AI.png";
import dialog from "../assets/img/dialog.png";
import ornaments from "../assets/img/ornaments.png";

const Rec = () => {
  return (
    <div className="rec-box">

      <div className="rec__item item-1">
        <img src={orange} alt="" />
        <div className="black-filter">
          <p className="rec__descr">ПОПУЛЯРНОЕ</p>
        </div>
      </div>

      <div className="rec__right">
        <div className="col">
          <div className="rec__item item-2">
            <img className="rec__img" src={ornaments} alt="" />
            <div className="black-filter">
              <p className="rec__descr">KG</p>
            </div> 
          </div>

          <div className="rec__item item-3">
            <img className="rec__img" src={AI} alt="" />
            <div className="black-filter">
              <p className="rec__descr">ОТ НЕЙРОСЕТИ</p>
            </div>
          </div>
        </div>
        {/* column */}
        <div className="col">
          <div className="rec__item item-3">
            <img className="rec__img" src={oneme} alt="" />
            <div className="black-filter">
              <p className="rec__descr">АНИМЕ</p>
            </div>
          </div>

          <div className="rec__item item-2">
            <img className="rec__img" src={dialog} alt="" />
            <div className="black-filter">
              <p className="rec__descr">ЦИТАТЫ</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Rec;
