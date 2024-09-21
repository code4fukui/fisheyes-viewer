const CACHE_VERSION = 1;

self.addEventListener("install", async (event) => {
  console.log("installed2 cache-service-worker.js");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", async (event) => {
  console.log("activated2  cache-service-worker.js");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", async (event) => {
  console.log("fetch", event.request);
  const cache = await caches.open("cache" + CACHE_VERSION);
  const rescache = await cache.match(event.request);
  if (rescache) {
    console.log("cache hit", event.request.clone(), rescache);
    //event.respondWith(rescache);
    return;
  }
  const res = await fetch(event.request.clone());
  //if (!(res.status < 400 && res.headers.has("content-type") && res.headers.get("content-type").match(/^font\//i))) {
  if (!(res.status < 400)) {
    event.respondWith(res);
    return;
  }
  // cache
  if (event.request.url.toLowerCase().endsWith(".jpg")) {
    await cache.put(event.request.clone(), res.clone());
    console.log("cache put", event.request.clone());
  }
  event.respondWith(res);
});

/*
self.addEventListener("fetch", (event) => {
  caches.open("cache" + CACHE_VERSION).then(cache => {
    cache.match(event.request).then(rescache => {
      if (rescache) {
        console.log("cache hit", event.request.clone(), rescache);
        //event.respondWith(rescache);
        return;
      }
      fetch(event.request.clone()).then(res => {
        //if (!(res.status < 400 && res.headers.has("content-type") && res.headers.get("content-type").match(/^font\//i))) {
        if (!(res.status < 400)) {
          event.respondWith(res);
          return;
        }
        // cache
        if (event.request.url.toLowerCase().endsWith(".jpg")) {
          cache.put(event.request.clone(), res.clone()).then(b => {
            console.log("cache put", event.request.clone());
          });
        }
        event.respondWith(res);
      });
    });
  });
});
*/
