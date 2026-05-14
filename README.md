# fisheyes-viewer

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web-based viewer for spatial photos and videos captured with Canon's RF5.2mm F2.8 L DUAL FISHEYE lens. Experience immersive VR180 content on headsets like the Meta Quest and Apple Vision Pro, or on a standard desktop browser.

## Demos

- **Slideshow:** [8K spatial photos from OkakiNEO at Mouemon farm in Sabae City](https://code4fukui.github.io/fisheyes-viewer/slideshow?url=https://tf0.code4fukui.org/vr180/2024-05-14-mouemon/mouemon.m3u8)
- **Video:** [4K video from OkakiNEO at Mouemon farm in Sabae City](https://code4fukui.github.io/fisheyes-viewer/?url=https://tf0.code4fukui.org/vr180/2024-05-14-mouemon/kome.m3u8)

## Features

- **Immersive Viewing:** Renders dual fisheye images and videos into a stereoscopic 180-degree view for VR/AR headsets.
- **Cross-Platform:** Supports WebXR-compatible devices (Meta Quest, Apple Vision Pro) and standard desktop/mobile browsers.
- **Dynamic Content:** Load any publicly accessible photo or video using a URL parameter.
- **Slideshow Mode:** Create and play photo slideshows with custom durations using a simple `.m3u8` playlist file.
- **Offline Support:** A service worker caches previously viewed images for offline access.
- **Lightweight:** Built with Three.js for efficient 3D rendering in the browser.

## Usage

You can use this viewer to display your own spatial media.

### Viewing a Single Photo or Video

Append the `?url=` query parameter to the viewer's URL, pointing to your media file.

**URL Structure:**
```
https://code4fukui.github.io/fisheyes-viewer/?url=<YOUR_MEDIA_URL>
```

**Example:**
```
https://code4fukui.github.io/fisheyes-viewer/?url=https://example.com/path/to/your/photo.jpg
```

### Creating a Slideshow

1.  Use the `slideshow` page: `https://github.com/code4fukui/fisheyes-viewer
2.  Create a `.m3u8` playlist file. This is a simple text file listing your image URLs and their display duration in seconds.

    **`playlist.m3u8` format:**
    ```
    #EXTM3U
    #EXTINF:8,
    https://example.com/photo1.jpg
    #EXTINF:5,
    https://example.com/photo2.jpg
    #EXTINF:10,
    https://example.com/photo3.jpg
    ```
3.  Point the `?url=` parameter to your `.m3u8` file.

    **Example:**
    ```
    https://code4fukui.github.io/fisheyes-viewer/slideshow?url=https://example.com/path/to/your/playlist.m3u8
    ```

### Controls

- **VR/AR Headset:** Click the "Start VR" or "Start AR" button to enter immersive mode.
- **Desktop:** Click and drag with the mouse to look around.

## Requirements

- A modern web browser with WebXR support (e.g., Chrome, Safari, Firefox, or the native browser on a VR/AR headset).

## License

MIT License