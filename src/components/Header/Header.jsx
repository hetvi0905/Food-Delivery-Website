import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse men featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.our mission
          is to satisfy you cravings and elevate your dining expereince,one
          delicious meat at a time.
        </p>
        <button className="button">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
