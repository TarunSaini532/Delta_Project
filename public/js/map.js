mapKey = mapToken;
console.log(mapKey);

var map = L.map("map", {
  center: [listing.geometry.coordinates[1], listing.geometry.coordinates[0]],
  zoom: 9,
});

const isRetina = L.Browser.retina;
const baseUrl = `https://maps.geoapify.com/v1/tile/klokantech-basic/{z}/{x}/{y}.png?apiKey={apiKey}`;
const retinaUrl = `https://maps.geoapify.com/v1/tile/klokantech-basic/{z}/{x}/{y}@2x.png?apiKey={apiKey}`;
L.tileLayer(isRetina ? retinaUrl : baseUrl, {
  attribution:
    'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
  apiKey: mapKey,
  maxZoom: 20,
  id: "klokantech-basic",
}).addTo(map);
L.marker([
  listing.geometry.coordinates[1],
  listing.geometry.coordinates[0],
]).addTo(map);

L.popup()
  .setLatLng([listing.geometry.coordinates[1], listing.geometry.coordinates[0]])
  .setContent(
    `<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`
  )
  .openOn(map);
