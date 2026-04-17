import React, { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { easing } from "maath";


const GemMesh =({node}) =>{
    const snap = useSnapshot(state)
    const gemRef = useRef()
    const [ready, setReady] = useState(false)

    //avoid viewMatrixINverse error use MeshthansmissionMaterial instead
    useEffect(()=>{
        const id = requestAnimationFrame(()=>setReady(true))
        return ()=>cancelAnimationFrame(id)
    },[])

    useFrame((_,delta)=>{
        if(gemRef.current)easing.dampC(gemRef.current.color, snap.gemStoneColor,0.25,delta)

    })

    return(
        <mesh
            castShadow
            geometry={node.geometry}
            position={node.position}
            roatation ={node.roatation}
            scale={node.scale}
            >
            {ready &&(
                <MeshTransmissionMaterial
                    ref={gemRef}
                    backside
                    samples={6}
                    thickness={0.3}
                    chromaticAberration={0.08}
                    ior={2.42}
                    color="white"
                    envMapIntensity={2}
                    depthWrite={false}
                    transparent
                    toneMapped={false}
                />
            )}

        </mesh>
    )
}

export default GemMesh;