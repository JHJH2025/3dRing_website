import React from "react";  
import { useSnapshot } from "valtio";
import state from "../store";


const Tab = (tab)=>{
    const snap = useSnapshot(state);
    return(
        <div
        key = {tab.name}
        >
            {/* edit all tabs here */}
           
            <img
            src = {tab.icon}
            />
        </div>
    )
}

export default Tab