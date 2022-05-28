import React from "react";
import style from "./CardDesign.module.css";

 const CardDesign = ({
  date,
  logo,
  heading,
  subheading,
  devices,
  color
}) => {
  return (
    <div className={style.mainCard} style={{ backgroundColor: color }}>
      <div className={style.cardLeft}>
        <div>{date}</div>
        <div className={style.caseStudy}>Case Study</div>
        <div>
          <h1>{heading}</h1>
        </div>
        <div>
          <h1>{subheading}</h1>
        </div>
        <div>{devices}</div>
      </div>
      <div className={style.cardRight}>
        <div>
          <img src={logo} alt="" width="60px" />
        </div>
        <div className={style.arrow}>-</div>
      </div>
    </div>
  );
};



export default CardDesign