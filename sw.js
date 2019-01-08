var staticCacheName = 'restaurant-reviews-app-cache';
  
self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/css/styles.css',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/10.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/index.html',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/offline.html',
        '/restaurant.html'
      ]);
    })
  );
});

// look in the cache 1st , if a match then use the cache otherwise fetch from the internet
self.addEventListener('fetch', function(event) {
event.respondWith(
caches.match(event.request)
      .then(function(response) {
        // If a cache is hit, we can return the response.
        if (response) {
          return response;
        }
          return fetch(event.request);

}).catch(function(){
console.log('OFFLINE Condition for a page request that has not been cached');
return fetch('/offline.html');
})

);
});

