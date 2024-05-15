import * as THREE from "three";
import { isVisionPro } from "./isVisionPro.js";
import { setVideoSrc } from "https://code4fukui.github.io/hls-movie-player-with-cache/setVideoSrc.js";

export const isVideo = (url) => {
  const path = url.toLowerCase();
  return path.endsWith(".mp4") || path.endsWith(".m3u8");
};

export const createTexture = (url) => {
  if (isVideo(url)) {
    const video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    setVideoSrc(video, url);
    const videoTexture = new THREE.VideoTexture(video);
    return videoTexture;
  }
  // image
  const texture = new THREE.TextureLoader().load(url);

  //texture.encoding = THREE.LinearEncoding;
  if (isVisionPro()) {
    // To switch it back to sRGB
    texture.encoding = THREE.sRGBEncoding;
  }
  return texture;
};
