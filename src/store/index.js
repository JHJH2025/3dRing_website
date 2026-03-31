import { proxy } from "valtio";


const state = proxy({
    //orginal state
    intro: true,// boolean value to switch up the pages
    color: '#fcc3fa',
    gemStoneColor:'#8DB600',
    metalColor:'#fcc3fa',
    metalDesign:'flower',
});

export default state;