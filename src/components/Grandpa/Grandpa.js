import React, { useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = React.createContext('ring');

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Diamond Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <RingContext.Provider value={ornament}>
      <div className="grandpa ">
        <h1>Grand pa</h1>
        <button onClick={handleBuyAHouse}>Buy A House</button>
        <p>House : {house}</p>
        <section style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
