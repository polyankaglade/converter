const staticDevConverter = "dev-converter-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icons/icon-64x64.png",
  "/icons/icon-128x128.png",
  "/icons/icon-512x512.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevConverter).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})