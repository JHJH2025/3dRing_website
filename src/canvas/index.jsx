import React, {useEffect}from "react";
import { Canvas, useThree} from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Backdrop from "./Backdrop";
import BlenderItem from "./BlenderItem";
import CameraRig from "./CameraRig";

//import Floor from "./Floor";



const CanvasModel = () =>{

    return(
        <Canvas
          shadows
          camera={{position:[0,0,0], fov:75}}
          className="w-full max-w-full h-full transition-all ease-in"
        > 
            <ambientLight intensity={0.5}/>
            <Environment preset="city"/>

            <CameraRig>
                <Backdrop/> 
                <Center>
                    <BlenderItem />
                        {/* <Floor/> */}
                </Center>
            </CameraRig>
        </Canvas>
       
    )
}

export default CanvasModel