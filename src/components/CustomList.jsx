import React, { useState } from "react";
import { gemStoneColors } from "../config/constants";

const CustomList = ()=>{
    const [gemColor, setgemColor] = useState("#50C878");
    const handleClick = (color)=>{
        // console.log("selected: ", color.name)
        // console.log("cur gemcor before update:", color.name, gemColor)
        setgemColor(color.colorHex)//set the state
    }
     
    
    return (
       <div
       className="customlist-text">
        <h2> Gem Stone Color</h2>
            <div 
            className="m-4 pt-8" >
            <div
                className="colorGroup flex flex-grow justify-evenly items-center">
                {gemStoneColors.map(
                    (selectGemcolor) =>{
                        const isSelected = gemColor===selectGemcolor.colorHex 
                        return(
                            <input
                                key = {selectGemcolor.name}
                                type = "radio"
                                className={`appearance-none size-8 rounded-full ${isSelected ? 'outline outline-offset-2':''}`}
                                style={{backgroundColor:selectGemcolor.colorHex}}
                                onClick={()=>{
                                    handleClick(selectGemcolor)
                                    //replace onChange with onClick
                                }}
                                >
                            </input>
                        )
                    }
                )}

            </div>
               

            </div>
           
        <h2> Choose the Metal</h2>
        <h2> Choose a Design</h2>
        <h2> Engrave Message?</h2>
       </div>
    )
}

export default CustomList