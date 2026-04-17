const CACHE_NAME = "arc-raiders-guide-v1-36-0";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./site.webmanifest",
  "./src/main.js",
  "./src/raider-interface/entry.js",
  "./src/raider-interface/design/tokens.js",
  "./src/raider-interface/commands/command-model.js",
  "./src/raider-interface/components/primitives.js",
  "./src/raider-interface/modes/mode-framework.js",
  "./src/raider-interface/modes/intent-modes.js",
  "./src/raider-interface/modes/catch-up-deltas.js",
  "./src/raider-interface/modes/problem-diagnostics.js",
  "./src/raider-interface/state/persistence.js",
  "./src/raider-interface/state/user-context.js",
  "./src/raider-interface/state/adaptive-layer.js",
  "./src/raider-interface/state/app-state.js",
  "./src/raider-interface/content/content-delivery.js",
  "./src/raider-interface/content/contextual-support.js",
  "./src/raider-interface/overlay/live-companion.js",
  "./src/raider-interface/architecture/rewrite-plan.js",
  "./src/raider-interface/preview/sandbox.js",
  "./src/raider-interface/README.md",
  "./assets/arc-signal.svg",
  "./assets/hero-raider-scene.svg",
  "./assets/machine-schematic.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
