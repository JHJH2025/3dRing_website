import React from "react";
import { SketchPicker } from "react-color"; 
import state from "../store";
import { useSnapshot } from "valtio";

const ColorPicker = ()=>{
    const snap = useSnapshot(state);

    return(
        <div className="absolute">
            <SketchPicker
                color = {snap.color}
                disableAlpha
                onChange = {(color)=> state.color = color.hex}
                presetColors = {[
                    '#50C878', '#852021', '#0F52BA', '#9966CC', '#FFC87C', '#ff1493'
                ]}
            />
        </div>
        
    )
}

export default ColorPicker