import React, { useEffect, useState } from "react";
import {RingDesigns, metalColors} from "../config/constants";
import state from "../store";
import { useSnapshot } from "valtio";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";

const CustomRingDesign = ()=>{
    const snap = useSnapshot(state)
    // console.log('metalDesign value:', snap.metalDesign)
    // console.log('RingDesigns keys:', Object.keys(RingDesigns))
    // console.log('config:', RingDesigns[snap.metalDesign])
        const config = RingDesigns[snap.metalDesign]
        const {nodes, materials} = useGLTF(config.path)
        //console.log('nodes:', nodes)
        const metalMaterial = materials['Metal_m']
        const gemMaterial = materials['Gem_m']

    //Extract path from each constant and preload
    Object.values(RingDesigns).forEach((path) => useGLTF.preload(path))

    //animation
    useFrame((_,delta)=>{
        if(metalMaterial) easing.dampC(metalMaterial.color, snap.metalColor, 0.25, delta)
        if(gemMaterial) easing.dampC(gemMaterial.color, snap.gemStoneColor, 0.25,delta)
    })

    //debug
    const {camera} = useThree()
    useEffect(()=>{
        window.logNodes = ()=>console.log(nodes)
        window.logCamera = ()=>console.log('pos', camera.position, 'fov', camera.fov)
    }, [nodes, camera])
    
    //Render all meshes from config(flatten all nodes)
    const allNodeNames = [
        ...config.parts.metal, 
        ...config.parts.gem,
    ]
    
    //function to update the design on select, pass in as path
    return(
        <group>
            {allNodeNames.map(
                (nodeName) =>{
                    const node = nodes[nodeName]
                    if(!node){
                        console.warn(`Node "${nodeName}" not found in ${config.path}`)
                        return null
                    }
                    //determin what materials asign to mesh by checking constant 
                    const isMetal = config.parts.metal.includes(nodeName)
                    const mat = isMetal?metalMaterial:gemMaterial
                    return(
                        <mesh
                        key = {nodeName}
                        castShadow
                        geometry={node.geometry}
                        material={mat}
                        material-roughness = {isMetal? 0.2:0.6}
                        position = {node.position}
                        rotation = {node.rotation}
                        scale={node.scale}
                        />
                    )
                }

            )}
        </group>
    )

}
export default CustomRingDesign

