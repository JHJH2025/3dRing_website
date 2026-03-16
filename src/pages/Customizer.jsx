import React from "react";
import {useState, useEffect} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from '../config/config';
import state from '../store';
import{ download } from '../assets';
import {downloadCanvasToImage, reader} from '../config/helpers';
import{EditorTabs, FilterTabs, DecalTypes} from '../config/constants';
import { fadeAnimation, slideAnimation } from "../config/motion";
import { AIPicker, Tab, FilePicker, CustomButton, CustomList } from "../components";
import { SketchPicker } from "react-color";


const Customizer = () => {
    const snap = useSnapshot(state)
    
    return(
        <AnimatePresence>
            
         {!snap.intro && (
            <>  
                {/* {console.log('not on home page')} */}
                <motion.div 
                key="custom"
                className="absolute top-0 right-5 z-10 min-w-1/2 lg:w-1/3 ">
                        <div className="editortabs-container tabs glassmorphism min-h-screen">
                            {/* {EditorTabs.map(
                                (tab) => (
                                    //console.log(tab.name, tab),
                                    <Tab
                                    key={tab.name}
                                    tab={tab}
                                    icon={tab.icon}
                                    handleClick={()=>{handleTabClick}}
                                    />

                                )
                            )} */}
                            <CustomList/>
                    </div>
                </motion.div>
                            
                <motion.div
                    className="absolute z-10 top-5 right-5"
                    {...fadeAnimation}>
                    <CustomButton
                     type = "filled"
                     title= "Go Back"
                     handleClick={()=>state.intro=true}
                     customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                    />
                </motion.div>
                <motion.div
                className="filtertabs-container"
                {...slideAnimation('up')}>
                    {FilterTabs.map(
                                (tab) => (
                                    //console.log(tab.name, tab),
                                    <Tab
                                    key={tab.name}
                                    tab={tab}
                                    isFilterTab=""
                                    isActiveTab=""
                                    handleClick={()=>{}}
                                    customStyles="px-10 py-20"
                                    />
                                )
                            )}


                </motion.div>
            </>
         )}
        </AnimatePresence>
    )
}

export default Customizer