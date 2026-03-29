import React, { useState } from "react";
import { gemStoneColors, metalColors, RingDesigns } from "../config/constants";
import state from "../store";
import { useSnapshot } from "valtio";
import DesignPicker from "./DesignPicker.jsx"

const CustomList = ()=>{
    const snap = useSnapshot(state);//just read from snap vs useState
    
    const handleClick = (color)=>{
        state.gemStoneColor = color.colorHex//update the global proxy state
    }
    const handleMetalClick = (color)=>{
        state.metalColor = color.colorHex//update the global proxy state
    }
    
    return (
       <div
       className="customlist-text">
        <h2 className="customlist-h2"> Gem Stone Color</h2>
            <div 
                className="customlist-h2" >
                {/* list for gemstone selection */}
                <div className="colorGroup flex flex-grow gap-4 ">
                    {gemStoneColors.map(
                        (selectGemcolor) =>{
                            const isSelected = snap.gemStoneColor ===selectGemcolor.colorHex //read from snapshots
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
                    className="colorGroup flex flex-grow gap-4  ">
                    {metalColors.map(
                        (selectMetalcolor) =>{
                            const isSelected = snap.metalColor===selectMetalcolor.colorHex 
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
        
        <h2 className="customlist-h2" > Choose a Design</h2>
            <div className = "customlist-h2">
                    <DesignPicker/>
            </div>
        <h2 className="customlist-h2"> Engrave Message?</h2>
       </div>
    )
}

export default CustomList