import * as THREE from "three";
import { isVisionPro } from "./isVisionPro.js";

export const createTexture = (url) => {
  const texture = new THREE.TextureLoader().load(url);

  //texture.encoding = THREE.LinearEncoding;
  if (isVisionPro()) {
    // To switch it back to sRGB
    texture.encoding = THREE.sRGBEncoding;
  }
  return texture;
};
