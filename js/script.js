var mymap = L.map('mapid').setView([39.801786, -101.858706], 3);
var con = 0;

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}{r}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(mymap);

function getPost(){
    fetch('https://api.jsonbin.io/b/60017fe6e31fbc3bdef3fa8a')
    .then((res)=>{
        return res.json();
    })
    .then((post)=>{
        for (let index = 0; index < 149; index++) {
            var marker = L.marker([parseFloat(post[con]["Lat"]), parseFloat(post[con]["Long"])]).addTo(mymap);
            marker.bindPopup("<img src='" + post[con]["Image_url"] + "'" + " class=popupImage " + "/>").openPopup();


            con=con+1;
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}
