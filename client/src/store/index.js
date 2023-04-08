import { proxy } from "valtio";

const state = proxy({
  intro: true, //this is for identifying user is on homepage(default is yes)
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
