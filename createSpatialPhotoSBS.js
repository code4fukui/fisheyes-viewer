import * as THREE from "three";
import { createTexture } from "./createTexture.js";

// 2048x1366
// 1024x1366
//const debug = true;
const debug = false;

export const createSpatialPhotoSBS = (img, reverse = true) => {
  const radius = 12;
  //const scale = debug ? 1 : 2;
  const wireframe = debug;

  const texture = debug || !img ? null : createTexture(img);
  const left = reverse ? 2 : 1;

  const scale = radius * 2;
  const scalex = scale * 1.1;
  const scaley = scalex * 1.366 / 1.024;

  const photo = new THREE.Group();
  for (let i = 1; i <= 2; i++) {
    //const geometry = new THREE.PlaneGeometry(1.024 * scale, 1.366 * scale); // for Canon
    // radius, widthseg, heightseg, phiStart, phiLength, thetaStart, thetaLength
    const geometry = new THREE.SphereGeometry(radius, 72, 24, 0, Math.PI * 2, 0, Math.PI / 2);
    // adjust texture
    const uvs = geometry.attributes.uv.array;
    const pos = geometry.attributes.position.array;
    for (let j = 0; j < uvs.length / 2; j++) {
        uvs[j * 2] = pos[j * 3 + 0] / scalex + 0.5 + (i == 1 ? 0.02 : -0.02);
        uvs[j * 2 + 1] = pos[j * 3 + 2] / scaley + 0.5;
    }
    
    if (i == left) {
      for (let j = 0; j < uvs.length; j += 2) {
          uvs[j] *= 0.5;
      }
    } else {
      for (let j = 0; j < uvs.length; j += 2) {
          uvs[j] = uvs[j] * 0.5 + 0.5;
      }
    }
    
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide,
      wireframe,
    });
    //const material = new THREE.MeshToonMaterial({ color: 0x6699FF }) 
    const plane = new THREE.Mesh(geometry, material);

    // planeの配置
    plane.layers.set(i); // display in left/right eye only
    //plane.layers.set(i == 1 ? 2 : 1); // display in left/right eye only
    //plane.rotation.z = Math.PI / 2;
    plane.rotation.x = Math.PI / 2;
    plane.rotation.y = Math.PI;
    plane.rotation.z = Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 1;
    photo.add(plane);
  }
  photo.setTexture = (tx) => {
    photo.children[0].material.map = tx;
    photo.children[0].material.needsUpdate = true;
    photo.children[1].material.map = tx;
    photo.children[1].material.needsUpdate = true;
  };
  return photo;
};
