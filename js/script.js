var mymap = L.Wrld.map("mapid", "fa8aa21e4ceb9095238b661e789ad376").setView([39.801786, -101.858706], 2);
var con = 0;

function getPost() {
  fetch('https://api.jsonbin.io/b/60017fe6e31fbc3bdef3fa8a')
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      for (let index = 0; index < 149; index++) {
        var marker = L.marker([parseFloat(post[con]["Lat"]), parseFloat(post[con]["Long"])]).addTo(mymap);
        marker.bindPopup("<img src='" + post[con]["Image_url"] + "'" + " class=popupImage " + "/>" + "<br> " + post[con]["Manufacturer"] + " " + "" + post[con]["Model"] + " " + "<br> Condition : " + post[con]["Condition"] + " " + "<br>Mileage : " + post[con]["Odometer"] + " " + "<br>Price : " + post[con]["Price"] + " "  ).openPopup();

          con = con + 1;
      }
    })
    .catch((error) => {
      console.log(error);
    })
}
