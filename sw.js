// 승연크래프트 service worker — 앱 파일을 저장해 오프라인에서도 실행되게 합니다
const CACHE = 'bw-06e33666f4';
const CORE = ["./", "./index.html", "./three.module.min.js", "./peerjs.min.js", "./manifest.webmanifest", "./fonts/fonts.css", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png", "./icons/apple-touch-icon.png", "./fonts/do-hyeon.woff2", "./fonts/black-han-sans.woff2"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('bw-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // 페이지는 최신 버전을 먼저 시도하고, 오프라인이면 저장본을 씁니다
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // 나머지(엔진, 폰트, 아이콘)는 저장본 우선, 없으면 받아서 저장
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return r;
  })));
});
