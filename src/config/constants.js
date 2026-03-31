import { swatch, fileIcon, ai,FlowerR, RoundR} from "../assets";

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
    colorHex:'#8DB600',
  },
  {
    name: "yellow",
    colorHex: '#FFFF8A',
  },
 
  {
    name: "ruby",
    colorHex: '#df0f0f',
  },
  {
    name: "blue",
    colorHex: '#0013de',
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

export const metalColors = [
  {
    name: "lilac",
    colorHex: '#fcc3fa',
  },
  {
    name: "silver",
    colorHex: '#e9e6e6',
  },
  
  {
    name: "gold",
    colorHex: '#E5CF87',
  },
  {
    name: "rosegold",
    colorHex: '#eaa99b',
  },
  
]

export const FilterTabs = [
  {
    name: "logoShirt",
  },
  {
    name: "stylishShirt",
  },
];


//Ring Design on Click Control
export const RingDesigns = {

  flower: {
    path: '/FlowerRingAfter.glb',
    parts: {
      metal: ['Metal_flower', 'Metal_g'],  // node names that use metal material
      gem:   ['Gem'],                // node names that use gem material
    }, 
    pic: FlowerR,
  },
  classic: {
    path: './Round_ring.glb',
    parts: {
      metal: ['Metal'],  // node names that use metal material
      gem:   ['Gem'],                // node names that use gem material
    },
    pic:RoundR, //so it access
  },

}
