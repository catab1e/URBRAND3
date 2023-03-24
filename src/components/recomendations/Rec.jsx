import "./rec.scss";
import React from "react";

import orange from "../assets/img/orange.png";
import oneme from "../assets/img/oneme.png";
import AI from "../assets/img/AI.png";
import dialog from "../assets/img/dialog.png";
import ornaments from "../assets/img/ornaments.png";

const Rec = () => {
  return (
    <div className="rec">
      <div className="rec-1 wrapper rel item">
        <div className="abs">
          <img className="img" src={orange} alt="" />
        </div>

        <div className="black-filter">ПОПУЛЯРНОЕ</div>
      </div>

      <div className="rec-2-container">
        <div className="rec-2 wrapper">
          <div className="rec-2-1 wrapper rel item">
            <div className="abs">
              <img className="img" src={ornaments} alt="" />
            </div>
            <div className="black-filter">KG</div>
          </div>
          <div className="rec-2-2 wrapper rel item">
            <div className="abs">
              <img className="img" src={AI} alt="" />
            </div>
            <div className="black-filter">ОТ НЕЙРОСЕТИ</div>
          </div>
        </div>

        <div className="rec-3 wrapper">
          <div className="rec-3-1 wrapper rel item">
            <div className="abs">
              <img className="img" src={oneme} alt="" />
            </div>
            <div className="black-filter">АНИМЕ</div>
          </div>
          <div className="rec-3-2 wrapper rel item">
            <div className="abs">
              <img className="img" src={dialog} alt="" />
            </div>
            <div className="black-filter">ЦИТАТЫ</div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Rec;
