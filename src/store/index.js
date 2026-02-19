import { proxy } from "valtio";

const state = proxy({
    //orginal state
    intro: true,// boolean value to switch up the pages
    color: '#fcc3fa',
    isLogoTexture: false,
    isFullTexture: true,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',

});

export default state;