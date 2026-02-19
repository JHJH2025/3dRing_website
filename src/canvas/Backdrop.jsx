import React from "react";
import { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Shadow } from "@react-three/drei";

import BlenderItem from "./BlenderItem";

const Backdrop = ()=>{
    const shadows = useRef();
    //const alphaMap = BlenderItem

    return(
        <directionalLight
            position = {[0,2,3]}
            intensity={0.5}
            color={0xAAFF00}
            castShadow={true}//showdow not showing, need plane?
        >
        </directionalLight>
        
        // <SpotLight
        //     distance={5}
        //     angle={0.5}
        //     attenuation={5}
        //     anglePower={5}
        //     >
        //     <SpotLightShadow
        //         ref = {shadows}
        //         distance={0.4} // Distance between the shadow caster and light
        //         alphaTest={0.5} // Sets the alpha value to be used when running an alpha test. See Material.alphaTest
        //         scale={1} //  Scale of the shadow caster plane
                
        //         width={512} // Width of the shadow map. The higher the more expnsive
        //         height={512} 
        //             />
        // </SpotLight>
    )
}

export default Backdrop