import React, { useEffect, useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame, useThree } from "@react-three/fiber";
import { Decal, useGLTF,useTexture } from "@react-three/drei";
import state from "../store";
import CustomRingDesign from '../components/CustomRingDesign'

const BlenderItem = () => {
    const snap = useSnapshot(state);
    return <CustomRingDesign key = {snap.metalDesign}/>
    // const {nodes, materials} = useGLTF('./FlowerRing.glb');
    
    // const flowerTopRef = useRef();
    // const gemRef = useRef();
    // const ringRef = useRef();
    // const {camera} = useThree();

    // //force react to update. && Change Ring Metal color
    // useFrame((_,delta)=>{
    //     easing.dampC(materials.gold_white.color,snap.metalColor, 0.25, delta )
    //     easing.dampC(materials.Gem_Pk_Material.color,snap.gemStoneColor, 0.25, delta );
    //     //console.log("pk color:", materials.Gem_Pk_Material.color, "snap color", gemStoneColors)
    // });
    // const modelPath = JSON.stringify(snap);

    // //method to check layers of the gltf object
    // useEffect(() => {
    //     console.log('\n=== NODES ===');
    //     console.log(nodes);
    //   console.log('\n=== MATERIALS ===');
    //  //console.log(stateString);  
    // });
    // const logMeshPositions = () => {
    //     console.log('FlowerTop:', flowerTopRef.current.position);
    //     console.log('Gem:', gemRef.current.position);
    //     console.log('Ring:', ringRef.current.position);
        
    // }
    // const logCamera = () =>{
    //     //camera info
    //     console.log('Camera position: ', camera.position);
    //     console.log('Camera rotation: ', camera.rotation);
    //     console.log('Camera FOV: ', camera.fov);
    // }
    
    // // Expose function to window for manual calling
    // useEffect(() => {
    //     window.logMeshPositions = logMeshPositions;
    //     window.logCamera = logCamera;
    // }, []);
    
    // //call function in windows:indow.logMeshPositions()
    // return (
    //     <group key = {modelPath}>
    //       <mesh 
    //        //Flowew Top
    //        ref = {flowerTopRef}
    //        castShadow
    //        geometry={nodes.FlowerTop.geometry}
    //        material={materials.gold_white}
    //        material-roughness = {0.2}
    //        scale={.35}//scale down to match the rest
    //       /> 
    //        <mesh 
    //        //Gem Stone 0,0,1.5
    //        ref = {gemRef}
    //        castShadow
    //        geometry={nodes.Gem.geometry}
    //        material={materials.Gem_Pk_Material}
    //        material-roughness = {0.6}
    //        position={[0,0,2.0]}
    //        scale={0.68}
    //        >
    //       </mesh>
    //       <mesh 
    //        //Ring 
    //        ref ={ringRef}
    //        castShadow
    //        geometry={nodes.Ring.geometry}
    //        material={materials.gold_white}
    //        material-roughness = {0.2}
    //        position={[0,0,0.8]}
    //        >
    //        </mesh>
    //     </group>
    // )
   
}
//flowering position

           //Flowew Top scale={.35} 
           //Gem Stone 0,0,1.5 position={[0,0,2.0]} scale={0.68}

export default BlenderItem