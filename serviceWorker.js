
const assets = [
  "/",
  "/index.html",
  "/css/styling.css",
  "/js/scriptF.js",
  "/img/cvflag.png",
  "/img/logo.png",
  "/img/Logoa.png",
]
const staticDevCoffee = "autarquicas2020"
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})