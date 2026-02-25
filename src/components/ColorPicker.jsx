import React from "react";
import { SketchPicker } from "react-color"; 
import state from "../store";
import { useSnapshot } from "valtio";

const ColorPicker = ()=>{
    const snap = useSnapshot(state);

    return(
        <div className="absolute">
            <SketchPicker
            
            />
        </div>
        
    )
}

export default ColorPicker