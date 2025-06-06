/// <reference lib="webworker" />
/** @type {ServiceWorkerGlobalScope} */
const sw = self;

// sw.addEventListener("install", (event) => {
//   console.log("🔧 Service Worker: install event");

//   event.waitUntil(
//     (async () => {
//       const cache = await caches.open("kokoCache");
//       await cache.addAll(["/baby.jpg"]);
//     })()
//   );
// });

// sw.addEventListener("activate", (event) => {
//   console.log("🚀 Service Worker: activate event");
//   // Usually you clean up old caches here
// });
// sw.addEventListener("update", (event) => {
//   console.log("updateee");
// });
// sw.addEventListener("fetch", (event) => {
//   const url = new URL(event.request.url);
//   console.log(url);
//   if (url.protocol !== "http:" && url.protocol !== "https:") {
//     return;
//   }
//   event.respondWith(cacheFirst(event.request, event));
// });
// const putInCache = async (request, response) => {
//   const cache = await caches.open("v1");
//   await cache.put(request, response);
// };
// const cacheFirst = async (request, event) => {
//   const responseFromCache = await caches.match(request);
//   if (responseFromCache) {
//     console.log(" 🎒 from cache");
//     return responseFromCache;
//   }
//   console.log(" 🚳 not from cache");
//   const responseFromNetwork = await fetch(request);
//   event.waitUntil(putInCache(request, responseFromNetwork.clone()));
//   return responseFromNetwork;
// };

sw.addEventListener("fetch", () => {});
sw.addEventListener("install", () => {});
