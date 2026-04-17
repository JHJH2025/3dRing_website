import React, { useEffect, useRef, useState } from "react";
import {RingDesigns, metalColors} from "../config/constants";
import state from "../store";
import { useSnapshot } from "valtio";
import { Gltf, MeshRefractionMaterial, useEnvironment, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { Vector3, Quaternion, Euler } from 'three'
import GemMesh from "./GemMesh";

const CustomRingDesign = ()=>{
    const snap = useSnapshot(state)
        const config = RingDesigns[snap.metalDesign]
        const {nodes, materials} = useGLTF(config.path)

        const metalMaterial = materials['Metal_m']
        const gemRef = useRef()
    
       
    //Extract path from each constant and preload
    Object.values(RingDesigns).forEach((design) => useGLTF.preload(design.path))

    //animation
    useFrame((_,delta)=>{
        if(metalMaterial) easing.dampC(metalMaterial.color, snap.metalColor, 0.25, delta)
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
            
                    return isMetal?(
                        <mesh
                        key = {nodeName}
                        castShadow
                        geometry={node.geometry}
                        material={metalMaterial}
                        material-roughness = {0.2}
                        position = {node.position}
                        rotation = {node.rotation}
                        scale={node.scale}
                        />
                    ):(
                        //Gem  meshes
                        <GemMesh
                        key = {nodeName}
                        node ={node}
                        />
                    )
                }

            )}
        </group>
    )

}
export default CustomRingDesign

