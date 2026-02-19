import React, { useRef } from "react";
import {useFrame} from '@react-three/fiber';
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from '../store';

//controlling the camera?
const CameraRig = ({children})=>{
    const group = useRef();
    const snap = useSnapshot(state);

    useFrame((state, delta)=>{
        const isBreakpoint = window.innerWidth <=1260;
        const isMobile = window.innerWidth <= 600;

        //set initial position of the model 
        //need to change for my model
        let targetPosition = [-0.4, -1, 5]
        if(snap.intro){
             //need to change for my model
            if(isBreakpoint) targetPosition = [0,-1,5];
            if(isMobile) targetPosition = [0, -1.2, 6];
        }else{
            if(isMobile) targetPosition = [0,-1,6]
            else targetPosition = [0,-1,5];
        }
        //set camera position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)

        //setting model rotation
        easing.dampE(
            group.current.rotation, 
            [state.pointer.y, -state.pointer.x * Math.PI *.3,0], 
            0.25,
            delta
        )
    })
    






    return (
        <group ref={group}>
            {children}
        </group>
    )
}

export default CameraRig