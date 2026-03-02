import React from "react";

const CustomList = ()=>{

    return (
       <mesh
        // className ='flex w-1/2 min-h-screen glassmorphism'
        >
        <planeGeometry args = {[2,5]}/>
            <meshStandardMaterial color='glassmorphism'/>
       </mesh>
    )
}

export default CustomList