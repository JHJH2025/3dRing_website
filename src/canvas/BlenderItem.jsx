import React, { useEffect, useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame, useThree } from "@react-three/fiber";
import { Decal, useGLTF,useTexture } from "@react-three/drei";
import state from "../store";

const BlenderItem = () => {
    const snap = useSnapshot(state);
    const {nodes, materials} = useGLTF('./Ring.glb');
    
    const flowerTopRef = useRef();
    const gemRef = useRef();
    const ringRef = useRef();
    const {camera} = useThree();

    //force react to update. && Change Ring Metal color
    useFrame((state,delta)=>easing.dampC(materials.gold_white.color,snap.color, 0.25, delta ));
    const stateString = JSON.stringify(snap);

    //var for customize logo
    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal)
    
    //method to check layers of the gltf object
    // useEffect(() => {
    //     console.log('\n=== NODES ===');
    //     console.log(nodes);
    //     console.log('\n=== MATERIALS ===');
    //     console.log(materials);  
    // });
    
    const logMeshPositions = () => {
        console.log('FlowerTop:', flowerTopRef.current.position);
        console.log('Gem:', gemRef.current.position);
        console.log('Ring:', ringRef.current.position);
        
    }
    const logCamera = () =>{
        //camera info
        console.log('Camera position: ', camera.position);
        console.log('Camera rotation: ', camera.rotation);
        console.log('Camera FOV: ', camera.fov);
    }
    const checkLogo = ()=>{
        console.log('Is logo texture? ', snap.isLogoTexture);
        console.log('Is Full texture? ', snap.isFullTexture);
    }
    // Expose function to window for manual calling
    useEffect(() => {
        window.logMeshPositions = logMeshPositions;
        window.logCamera = logCamera;
        window.checkLogo = checkLogo;
    }, []);
    //call function in windows:indow.logMeshPositions()
    return (
        <group key = {stateString}>
          <mesh 
           //Flowew Top
           ref = {flowerTopRef}
           castShadow
           geometry={nodes.FlowerTop.geometry}
           material={materials.gold_white}
           material-roughness = {0.2}
           scale={.35}//scale down to match the rest
          /> 
           <mesh 
           //Gem Stone 0,0,1.5
           ref = {gemRef}
           castShadow
           geometry={nodes.Gem.geometry}
           material={materials.Gem_Pk_Material}
           material-roughness = {0.6}
           position={[0,0,2.0]}
           scale={0.68}
           >
          </mesh>
          <mesh 
           //Ring 
           ref ={ringRef}
           castShadow
           geometry={nodes.Ring.geometry}
           material={materials.gold_white}
           material-roughness = {0.2}
           position={[0,0,0.8]}
           >
           </mesh>
        </group>
    )
   
}

export default BlenderItem