let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 21.81431648876566, lng: -102.76975790348973 },
    zoom: 15,
  });
}
initMap();