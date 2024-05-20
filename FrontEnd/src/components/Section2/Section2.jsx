import React, { useContext, useEffect, useState } from "react";
import "./Section2.css";
import MainContext from "../../context/context";
import Card from "../Card/Card";
const Section2 = () => {
  const { data, setData } = useContext(MainContext);
  const [inpValue,setInpValue]=useState("")
  const [filteredData,setFilteredData]=useState(data)
  useEffect(() => {
    setFilteredData(
      data.filter(item =>
        item.title.toLowerCase().includes(inpValue.toLowerCase())
      )
    );
  }, [inpValue, data]);

  const handleInputChange = (value) => {
    setInpValue(value);
  };
  return (
    <div className="section2">
      <div className="container">
        <input value={inpValue} type="text" placeholder="Search..." style={{padding:"10px",outline:"none"}} onChange={(e)=>{
          handleInputChange(e.target.value)
        }}/>
        {filteredData.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Section2;
