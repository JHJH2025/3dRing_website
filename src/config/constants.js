import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "stoneColor",
    title: "Select Stone Color",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];
export const gemStoneColors = [
  {
    name: "green",
    colorHex:'#50C878',
  },
  {
    name: "yellow",
    colorHex: '#FFED29',
  },
 
  {
    name: "ruby",
    colorHex: '#df0f0f',
  },
  {
    name: "blue",
    colorHex: '	#0013de',
  },
  {
    name: "purple",
    colorHex: '#c800ff',
  },
  
  {
    name: "pink",
    colorHex: '#ff1493',
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
