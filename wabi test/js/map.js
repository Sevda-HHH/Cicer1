
// Initialize and add the map
function initMap() {
    const uluru = { lat: 40.409264, lng: 49.867092 };
    const map = new google.maps.Map(document.getElementById("contactMap"), {
        zoom: 4,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}