import * as THREE from "three";

// 2048x1366
// 1024x1366

export const createSpatialPhotoSBS = (img, reverse) => {
  const photo = new THREE.Group();
  const texture = new THREE.TextureLoader().load(img);
  const left = reverse ? 2 : 1;
  const scale = 2;
  for (let i = 1; i <= 2; i++) {
    const geometry = new THREE.PlaneGeometry(1.024 * scale, 1.366 * scale); // for Canon
    // adjust texture
    const uvs = geometry.attributes.uv.array;
    if (i == left) {
      for (let j = 0; j < uvs.length; j += 2) {
          uvs[j] *= 0.5;
      }
    } else {
      for (let j = 0; j < uvs.length; j += 2) {
          uvs[j] = uvs[j] * 0.5 + 0.5;
      }
    }
    const material = new THREE.MeshBasicMaterial({ map: texture });
    //const material = new THREE.MeshToonMaterial({ color: 0x6699FF }) 
    const plane = new THREE.Mesh(geometry, material);

    // planeの配置
    plane.layers.set(i); // display in left/right eye only
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = -1;
    photo.add(plane);
  }
  return photo;
};
