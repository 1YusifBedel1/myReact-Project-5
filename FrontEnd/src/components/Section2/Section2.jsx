import React, { useContext, useEffect, useState } from "react";
import "./Section2.css";
import MainContext from "../../context/context";
import Card from "../Card/Card";
const Section2 = () => {
  const { data, setData } = useContext(MainContext);
  const [inpValue,setInpValue]=useState("")
  const [filteredData,setFilteredData]=useState(data);
  const [sortBy,setSortBy] =useState(null)
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
        <button onClick={()=>setSortBy({field:"price",asc:false})}>A-Z</button>
        <button onClick={()=>setSortBy({field:"price",asc:true})}>Z-A</button>

        {filteredData
        .sort((a,b)=>{
          if(!sortBy){
            return 0;
          }
          else if(sortBy.asc){
              return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b
                [sortBy.field]> a[sortBy.field] ? -1 : 0))
          }else if(
            sortBy.asc ==false){
              return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b
                [sortBy.field]> a[sortBy.field] ? -1 : 0))
          }
        })
        
        .map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Section2;
