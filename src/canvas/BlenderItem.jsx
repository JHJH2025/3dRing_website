import React, { useEffect, useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame, useThree } from "@react-three/fiber";
import state from "../store";
import CustomRingDesign from '../components/CustomRingDesign'

//only take care of the rendering of the model 
const BlenderItem = () => {
    const snap = useSnapshot(state);
    return <CustomRingDesign key = {snap.metalDesign}
    />   
}
//flowering position

           //Flowew Top scale={.35} 
           //Gem Stone 0,0,1.5 position={[0,0,2.0]} scale={0.68}

export default BlenderItem