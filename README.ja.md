# fisheyes-viewer

キヤノン（Canon）のRF5.2mm F2.8 L DUAL FISHEYEレンズで撮影された空間写真や動画を表示するためのWebベースのビューアーです。Meta QuestやApple Vision Proなどのヘッドセット、または標準的なデスクトップブラウザで、没入感のあるVR180コンテンツを体験できます。

## デモ

- **スライドショー:** [鯖江市のモウエモン農場でのOkakiNEOの8K空間写真](https://code4fukui.github.io/fisheyes-viewer/slideshow?url=https://tf0.code4fukui.org/vr180/2024-05-14-mouemon/mouemon.m3u8)
- **動画:** [鯖江市のモウエモン農場でのOkakiNEOの4K動画](https://code4fukui.github.io/fisheyes-viewer/?url=https://tf0.code4fukui.org/vr180/2024-05-14-mouemon/kome.m3u8)

## 機能

- **没入型表示:** デュアルフィッシュアイ（二眼魚眼）の画像や動画を、VR/ARヘッドセット向けの立体視180度ビューとしてレンダリングします。
- **クロスプラットフォーム:** WebXR対応デバイス（Meta Quest、Apple Vision Pro）および標準的なデスクトップ/モバイルブラウザをサポートします。
- **任意のコンテンツの読み込み:** URLパラメータを使用して、公開されている任意の写真や動画を読み込むことができます。
- **スライドショーモード:** シンプルな `.m3u8` プレイリストファイルを使用して、任意の表示時間を設定した写真のスライドショーを作成・再生できます。
- **オフライン対応:** Service Workerが一度表示した画像をキャッシュし、オフラインでのアクセスをサポートします。
- **軽量:** Three.jsを使用して、ブラウザ上で効率的な3Dレンダリングを実現しています。

## 使い方

このビューアーを使用して、独自の空間メディアを表示することができます。

### 単一の写真または動画の表示

ビューアーのURLに `?url=` クエリパラメータを追加し、メディアファイルのURLを指定します。

**URLの構造:**
```
https://code4fukui.github.io/fisheyes-viewer/?url=<YOUR_MEDIA_URL>
```

**例:**
```
https://code4fukui.github.io/fisheyes-viewer/?url=https://example.com/path/to/your/photo.jpg
```

### スライドショーの作成

1.  `slideshow` ページを使用します: `https://code4fukui.github.io/fisheyes-viewer/slideshow`
2.  `.m3u8` プレイリストファイルを作成します。これは、画像のURLと表示時間（秒）をリストにしたシンプルなテキストファイルです。

    **`playlist.m3u8` のフォーマット:**
    ```
    #EXTM3U
    #EXTINF:8,
    https://example.com/photo1.jpg
    #EXTINF:5,
    https://example.com/photo2.jpg
    #EXTINF:10,
    https://example.com/photo3.jpg
    ```
3.  `?url=` パラメータで `.m3u8` ファイルを指定します。

    **例:**
    ```
    https://code4fukui.github.io/fisheyes-viewer/slideshow?url=https://example.com/path/to/your/playlist.m3u8
    ```

### 操作方法

- **VR/ARヘッドセット:** 「START VR」または「START AR」ボタンをクリックして没入モードに入ります。
- **デスクトップ:** マウスでクリック＆ドラッグして周囲を見渡します。

## 要件

- WebXRをサポートするモダンWebブラウザ（Chrome、Safari、Firefox、またはVR/ARヘッドセットのネイティブブラウザなど）。

## ライセンス

MIT License
