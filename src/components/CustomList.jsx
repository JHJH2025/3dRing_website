import React, { useState } from "react";
import { gemStoneColors, metalColors } from "../config/constants";
import state from "../store";
import { useSnapshot } from "valtio";

const CustomList = ()=>{
    const snap = useSnapshot(state);
    const [gemColor, setgemColor] = useState("#50C878");
     const [metalColor, setmetalColor] = useState("#fcc3fa");
    const handleClick = (color)=>{
        // console.log("selected: ", color.name)
        // console.log("cur gemcor before update:", color.name, gemColor)
        setgemColor(color.colorHex)//local state for outline selected color
        state.gemStoneColor = color.colorHex//update the global proxy state
        console.log("state.gemStoneColor: ",state.gemStoneColor)
    }
       const handleMetalClick = (color)=>{
        // console.log("selected: ", color.name)
        // console.log("cur gemcor before update:", color.name, gemColor)
        setmetalColor(color.colorHex)//local state for outline selected color
        state.metalColor = color.colorHex//update the global proxy state
    }
    
    return (
       <div
       className="customlist-text">
        <h2 className="customlist-h2"> Gem Stone Color</h2>
            <div 
                className="customlist-h2" >
                {/* list for gemstone selection */}
                <div className="colorGroup flex flex-grow felx gap-4 justify-evenly ">
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
           
        <h2 className="customlist-h2"> Choose the Metal</h2>
         <div className="customlist-h2" >
            {/* list for metal selection */}
                <div
                    className="colorGroup flex flex-grow felx gap-4 justify-evenly ">
                    {metalColors.map(
                        (selectMetalcolor) =>{
                            const isSelected = metalColor===selectMetalcolor.colorHex 
                            return(
                                <input
                                    key = {selectMetalcolor.name}
                                    type = "radio"
                                    className={`appearance-none size-8 rounded-full ${isSelected ? 'outline outline-offset-2':''}`}
                                    style={{backgroundColor:selectMetalcolor.colorHex}}
                                    onClick={()=>{
                                        handleMetalClick(selectMetalcolor)
                                        //replace onChange with onClick
                                    }}
                                    >
                                </input>
                            )
                        }
                    )}

                </div>
            </div>
        
        <h2> Choose a Design</h2>
        <h2> Engrave Message?</h2>
       </div>
    )
}

export default CustomList