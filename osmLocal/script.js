"use strict";
var app = angular.module("xmodule", []).controller("xcontroller", [
  "$scope",
  function ($scope) {
   
    var cfg = {
      // radius should be small ONLY if scaleRadius is true (or small radius is intended)
      "radius": 2,
      "maxOpacity": .8,
      // scales the radius based on map zoom
      "scaleRadius": true,
      // if set to false the heatmap uses the global maximum for colorization
      // if activated: uses the data maximum within the current map boundaries
      //   (there will always be a red spot with useLocalExtremas true)
      "useLocalExtrema": true,
      // which field name in your data represents the latitude - default "lat"
      latField: 'lat',
      // which field name in your data represents the longitude - default "lng"
      lngField: 'lng',
      // which field name in your data represents the data value - default "value"
      valueField: 'count'
    };


    var heatmapLayer = new HeatmapOverlay(cfg);

    
    var osmMap = L.map(mapData, {
      center: [17.342761, 78.552432],
      zoom: 3,
      maxZoom: 18,
      minZoom: 2,
     // layers: [heatmapLayer]
    });
    
    osmMap.attributionControl.setPosition("topright");
    osmMap.attributionControl.addAttribution("Hello");

    var layer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    osmMap.addLayer(layer);
    osmMap.addLayer(heatmapLayer);
    var testData = {
      max: 8,
      data: [{lat: 24.6408, lng:46.7728, count: 3},{lat: 50.75, lng:-1.55, count: 1},{lat: 52.6333, lng:1.75, count: 1},{lat: 48.15, lng:9.4667, count: 1},{lat: 52.35, lng:4.9167, count: 2},{lat: 60.8, lng:11.1, count: 1},{lat: 43.561, lng:-116.214, count: 1},{lat: 47.5036, lng:-94.685, count: 1},{lat: 42.1818, lng:-71.1962, count: 1},{lat: 42.0477, lng:-74.1227, count: 1},{lat: 40.0326, lng:-75.719, count: 1},{lat: 40.7128, lng:-73.2962, count: 2},{lat: 27.9003, lng:-82.3024, count: 1},{lat: 38.2085, lng:-85.6918, count: 1},{lat: 46.8159, lng:-100.706, count: 1},{lat: 30.5449, lng:-90.8083, count: 1},{lat: 44.735, lng:-89.61, count: 1},{lat: 41.4201, lng:-75.6485, count: 2},{lat: 39.4209, lng:-74.4977, count: 1},{lat: 39.7437, lng:-104.979, count: 1},{lat: 39.5593, lng:-105.006, count: 1},{lat: 45.2673, lng:-93.0196, count: 1},{lat: 41.1215, lng:-89.4635, count: 1},{lat: 43.4314, lng:-83.9784, count: 1},{lat: 43.7279, lng:-86.284, count: 1},{lat: 40.7168, lng:-73.9861, count: 1},{lat: 47.7294, lng:-116.757, count: 1},{lat: 47.7294, lng:-116.757, count: 2},{lat: 35.5498, lng:-118.917, count: 1},{lat: 34.1568, lng:-118.523, count: 1},{lat: 39.501, lng:-87.3919, count: 3},{lat: 33.5586, lng:-112.095, count: 1},{lat: 38.757, lng:-77.1487, count: 1},{lat: 33.223, lng:-117.107, count: 1},{lat: 30.2316, lng:-85.502, count: 1},{lat: 39.1703, lng:-75.5456, count: 8},{lat: 30.0041, lng:-95.2984, count: 2},{lat: 29.7755, lng:-95.4152, count: 1},{lat: 41.8014, lng:-87.6005, count: 1},{lat: 37.8754, lng:-121.687, count: 7},{lat: 38.4493, lng:-122.709, count: 1},{lat: 40.5494, lng:-89.6252, count: 1},{lat: 42.6105, lng:-71.2306, count: 1},{lat: 40.0973, lng:-85.671, count: 1},{lat: 40.3987, lng:-86.8642, count: 1},{lat: 40.4224, lng:-86.8031, count: 4},{lat: 47.2166, lng:-122.451, count: 1},{lat: 32.2369, lng:-110.956, count: 1},{lat: 41.3969, lng:-87.3274, count: 2},{lat: 41.7364, lng:-89.7043, count: 2},{lat: 42.3425, lng:-71.0677, count: 1},{lat: 33.8042, lng:-83.8893, count: 1},{lat: 36.6859, lng:-121.629, count: 2},{lat: 41.0957, lng:-80.5052, count: 1},{lat: 46.8841, lng:-123.995, count: 1},{lat: 40.2851, lng:-75.9523, count: 2},{lat: 42.4235, lng:-85.3992, count: 1},{lat: 39.7437, lng:-104.979, count: 2},{lat: 25.6586, lng:-80.3568, count: 7},{lat: 33.0975, lng:-80.1753, count: 1},{lat: 25.7615, lng:-80.2939, count: 1},{lat: 26.3739, lng:-80.1468, count: 1},{lat: 37.6454, lng:-84.8171, count: 1},{lat: 34.2321, lng:-77.8835, count: 1},{lat: 34.6774, lng:-82.928, count: 1},{lat: 39.9744, lng:-86.0779, count: 1},{lat: 35.6784, lng:-97.4944, count: 2},{lat: 33.5547, lng:-84.1872, count: 1},{lat: 27.2498, lng:-80.3797, count: 1},{lat: 41.4789, lng:-81.6473, count: 1},{lat: 41.813, lng:-87.7134, count: 1},{lat: 41.8917, lng:-87.9359, count: 1},{lat: 35.0911, lng:-89.651, count: 1},{lat: 32.6102, lng:-117.03, count: 1},{lat: 41.758, lng:-72.7444, count: 1},{lat: 39.8062, lng:-86.1407, count: 1},{lat: 41.872, lng:-88.1662, count: 1},{lat: 34.1404, lng:-81.3369, count: 1},{lat: 46.15, lng:-60.1667, count: 1},{lat: 36.0679, lng:-86.7194, count: 1},{lat: 43.45, lng:-80.5, count: 1},{lat: 44.3833, lng:-79.7, count: 1},{lat: 45.4167, lng:-75.7, count: 2},{lat: 43.75, lng:-79.2, count: 2},{lat: 45.2667, lng:-66.0667, count: 3},{lat: 42.9833, lng:-81.25, count: 2},{lat: 44.25, lng:-79.4667, count: 3},{lat: 45.2667, lng:-66.0667, count: 2},{lat: 34.3667, lng:-118.478, count: 3},{lat: 42.734, lng:-87.8211, count: 1},{lat: 39.9738, lng:-86.1765, count: 1},{lat: 33.7438, lng:-117.866, count: 1},{lat: 37.5741, lng:-122.321, count: 1},{lat: 42.2843, lng:-85.2293, count: 1},{lat: 34.6574, lng:-92.5295, count: 1},{lat: 41.4881, lng:-87.4424, count: 1},{lat: 25.72, lng:-80.2707, count: 1},{lat: 34.5873, lng:-118.245, count: 1},{lat: 35.8278, lng:-78.6421, count: 1}]
    };
       
     // osmMap.addLayer(heatmapLayer);
      heatmapLayer.setData(testData); 

  var x = osmMap.getZoom();
  console.log("Zoom  = "+ x);
  var latLng = [17.385, 78.4867]
  //osmMap.fitBounds(latLng);

  // osmMap.setView(latLng)   ;
    //  test del   17.3850 78.4867
    var test4 = L.marker([17.385, 78.4867]);
    test4.on("mouseover", testclick);

    //marker.bindPopup(customPopup,customOptions);
    test4.addTo(osmMap);
    var dat = L.latLngBounds();
    console.log(dat);
    function testclick(e) {
      e.target.bindPopup();
      console.log("Test clicked");
    }

    var data = [[28.7041, 77.1025]];
    marker = new L.Marker(data[0]); // when we click afterSingleClick function is triggered
    // marker.on('click', afterSingleClick )
    marker.bindPopup("Delhi"); // bind the custom popup
    marker.addTo(osmMap);
 
    // osm and $scope.map works same
    $scope.map = osmMap;

    var bejing = { lat : 39.9042 , lng : 116.4074 }
     var mark = L.marker(bejing);
    mark.addTo($scope.map)
    mark.bounce(20)
    mark.on('click',function(){
      this.bounce(4);
    })

    var delhi = { lat: 25.454523, lng: 81.88114 };

    var latl = L.latLng(delhi);
    var test = L.marker(latl); //Delhi
    test.bindPopup("<b>Day trip started at - 05-01-2022 14:33</b>");
    var getLat = test.getLatLng();
    test.on("mouseover",function(mark){
      mark.target.openPopup();
    })
   $scope.map.addLayer(test);
   
   // test.bounce(5);
    // var content = test.getPopup().getContent();
    // console.log(content);
    // test.getPopup().setContent("123");
    
    // test.getPopup().update();

    var delhi = { lat: 17.019426, lng: 74.84637 };

    var latl = L.latLng(delhi);
    var mark1 = L.marker(latl).bindPopup("Welcome To 17 74"); //Delhi
    var getLat = mark1.getLatLng();
    mark1.addTo($scope.map);
   // mark1.bounce(4);
    // use of latlng ang latLngBounds
    var latlng = L.latLng(50.5, 30.5);

    //var mark = L.latLng(28.644800,77.216721)
    // var x  = new L.latLngBounds(mark,latlng);
    //x.extend(28.644800,77.216721);
    //console.log("value in x", +x);

    //Add overlay
    var imageUrl = "https://picsum.photos/536/354";
    var imageBounds = [
      [17.342761, 78.552432],
      [16.396553, 80.727725],
    ];
    var overlay = L.imageOverlay(imageUrl, imageBounds);
    overlay.addTo(osmMap);
    var overlay2 = new L.DivOverlay();
    var x = 3;
    console.log(overlay2);

    // marker icon type
    var LeafIcon = L.Icon.extend({
      options: {
        iconSize: [30, 70],
        shadowSize: [50, 64],
        iconAnchor: [15, 70],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76],
      },
    });
    var greenIcon = new LeafIcon({
      iconUrl: "https://media.giphy.com/media/l2JJu04IiC8vua5hu/giphy.gif",
      shadowUrl: "http://leafletjs.com/examples/custom-icons/leaf-shadow.png",
    });
    // Add onclick event
    function afterSingleClick(e) {
    //  console.log("data" + e.latlng);
      e.target.bindPopup("infoContent Data");
      e.target.openPopup();
		  e.target.getPopup().update();
    }

    //put markers
    var locations = [
      { lat: 45.815, lng: 15.9819, content: "<b>Zagreb</b><br>Description..." },
      {
        lat: 43.5081,
        lng: 16.4402,
        content: "<b>Split</b><br>Some descrip...",
      },
      {
        lat: 42.6507,
        lng: 18.0944,
        content: "<b>Dubrovnik</b><br>Descript...",
      },
    ];

    var data = [
      [12.12, 76.68],
      [16.994444, 73.300003],
      [24.879999, 74.629997],
      [24.633568, 87.849251],
      [13.432515, 77.727478],
      [19.354979, 84.986732],
    ];

    var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];

//var polygon = L.polygon(latlngs, {color: 'red'}).addTo(osmMap);

// zoom the map to the polygon

    var polygon2 = L.polygon(
      data,{ color:'Red' }
      
).addTo(osmMap);

  // {//weight: 7,
  //   color:'Red'
  //   //                           ,strokeColor: 'red',
  //   //                           strokeOpacity: 0.8,
  //   //                           strokeWeight: 1,
  //   //                           fillColor: 'blue',
  //   //                           fillOpacity: 0.2
  // }

  var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];

  var polygon = L.polygon(latlngs, {color: 'red'}).addTo(osmMap);
  osmMap.fitBounds(polygon2.getBounds());

//polygon.setStyle({weight: 4})
    //custom info window
    var customPopup =
      "<b>My office</b><br/><img src='https://media.giphy.com/media/5UBoxtyNy0NRNhX1HS/giphy.gif' alt='maptime logo gif' width='150px'/>";
    var customOptions =
      //  specify popup options
      {
        maxWidth: "400",
        width: "200",
        className: "popupCustom",
      }; 
      
    var marker = [];
    for (var i = 0; i < data.length; i++) {
      marker[i] = new L.Marker(data[i], { icon: greenIcon ,
                              });  //    bounceOnAdd: true,       bounceOnAddOptions: {duration: 500, height: 100, loop: 2}  
      marker[i].on("mouseover", afterSingleClick);   // when we click afterSingleClick function is triggere
      marker[i].bindPopup(customPopup, customOptions); // bind the custom popup
      marker[i].addTo(osmMap);
     //marker[i].bounce();
    }
    
    

    // for (var i = 0; i < addressPoints.length; i++) {
    //   var a = addressPoints[i];
    //   var title = a[2];
    //   var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
    //   marker.bindPopup(title);
     
    // }
 
   
     
    for (var i = 0; i < data.length; i++) {
      marker[i].setOpacity(false);
    }
    // for(var i=0;i<data.length;i++)
    // {
    // osmMap.addLayer( marker[i])
    // }
    var val4 = { lat: 18.516308, lng: 73.77342 };

    marker = new L.Marker(val4);

    //function customMarker

    document.getElementById("mapData").style.cursor = "crosshair";

    var coordinates = [];
    for (var i = 0; i < data.length - 1; i++) {
      coordinates.push(L.latLng(data[i][0], data[i][1]));
    }
    // var poly = L.polyline(coordinates, {
    //   opacity: 0.5,
    //   color: "#ff0000",
    //   weight: 8,
    // }).addTo(osmMap);
    //     osmMap.removeLayer(poly);
    var data = [
      {
        distance: { text: "2179.8 mi", value: 2179.8 },
        duration: { text: "1 Minutes, 33 Seconds", value: 93.9 },
        travel_mode: "driving",
        address: "",
        start_location: { lat: 17.021524, lng: 74.848604 },
        driving_side: "right",
        end_location: { lat: 17.009658, lng: 74.86255 },
      },
      {
        distance: { text: "777.4 mi", value: 777.4 },
        duration: { text: "33 Seconds", value: 33 },
        travel_mode: "driving",
        maneuver: "left",
        address: "",
        start_location: { lat: 17.009658, lng: 74.86255 },
        driving_side: "right",
        end_location: { lat: 17.005806, lng: 74.868497 },
      },
      {
        distance: { text: "23408.7 mi", value: 23408.7 },
        duration: { text: "16 Minutes, 32 Seconds", value: 992.3 },
        travel_mode: "driving",
        maneuver: "slight left",
        address: "",
        start_location: { lat: 17.005806, lng: 74.868497 },
        driving_side: "right",
        end_location: { lat: 17.002686, lng: 75.074239 },
      },
      {
        distance: { text: "16890.9 mi", value: 16890.9 },
        duration: { text: "11 Minutes, 57 Seconds", value: 717.6 },
        travel_mode: "driving",
        maneuver: "slight left",
        address: "",
        start_location: { lat: 17.002686, lng: 75.074239 },
        driving_side: "right",
        end_location: { lat: 17.050899, lng: 75.21893 },
      },
      {
        distance: { text: "41219.8 mi", value: 41219.8 },
        duration: { text: "29 Minutes, 12 Seconds", value: 1752 },
        travel_mode: "driving",
        maneuver: "right",
        address: "",
        start_location: { lat: 17.050899, lng: 75.21893 },
        driving_side: "right",
        end_location: { lat: 16.841102, lng: 75.520309 },
      },
      {
        distance: { text: "14295.6 mi", value: 14295.6 },
        duration: { text: "10 Minutes, 10 Seconds", value: 610.9 },
        travel_mode: "driving",
        maneuver: "left",
        address: "Athani Road",
        start_location: { lat: 16.841102, lng: 75.520309 },
        driving_side: "right",
        end_location: { lat: 16.82544, lng: 75.652556 },
      },
      {
        distance: { text: "3626.7 mi", value: 3626.7 },
        duration: { text: "2 Minutes, 34 Seconds", value: 154.1 },
        travel_mode: "driving",
        maneuver: "straight",
        address: "Toravi Road",
        start_location: { lat: 16.82544, lng: 75.652556 },
        driving_side: "right",
        end_location: { lat: 16.828377, lng: 75.686341 },
      },
      {
        distance: { text: "5034.3 mi", value: 5034.3 },
        duration: { text: "4 Minutes, 42 Seconds", value: 282.1 },
        travel_mode: "driving",
        maneuver: "right",
        address: "Ring Road",
        start_location: { lat: 16.828377, lng: 75.686341 },
        driving_side: "right",
        end_location: { lat: 16.802808, lng: 75.718547 },
      },
      {
        distance: { text: "427.7 mi", value: 427.7 },
        duration: { text: "26 Seconds", value: 26.4 },
        travel_mode: "driving",
        maneuver: "right",
        address: "",
        start_location: { lat: 16.802808, lng: 75.718547 },
        driving_side: "right",
        end_location: { lat: 16.799461, lng: 75.717432 },
      },
      {
        distance: { text: "1718.3 mi", value: 1718.3 },
        duration: { text: "1 Minutes, 12 Seconds", value: 72.8 },
        travel_mode: "driving",
        maneuver: "left",
        address: "Bijapur Bypass",
        start_location: { lat: 16.799461, lng: 75.717432 },
        driving_side: "right",
        end_location: { lat: 16.799334, lng: 75.733511 },
      },
      {
        distance: { text: "106684.2 mi", value: 106684.2 },
        duration: { text: "1 Hours, 15 Minutes, 21 Seconds", value: 4521.3 },
        travel_mode: "driving",
        maneuver: "right",
        address: "",
        start_location: { lat: 16.799334, lng: 75.733511 },
        driving_side: "right",
        end_location: { lat: 15.962975, lng: 76.125577 },
      },
      {
        distance: { text: "8496 mi", value: 8496 },
        duration: { text: "6 Minutes", value: 360.2 },
        travel_mode: "driving",
        maneuver: "straight",
        address: "Bijapur Road",
        start_location: { lat: 15.962975, lng: 76.125577 },
        driving_side: "right",
        end_location: { lat: 15.900617, lng: 76.163817 },
      },
      {
        distance: { text: "17093.8 mi", value: 17093.8 },
        duration: { text: "15 Minutes, 47 Seconds", value: 947.5 },
        travel_mode: "driving",
        maneuver: "slight left",
        address: "",
        start_location: { lat: 15.900617, lng: 76.163817 },
        driving_side: "right",
        end_location: { lat: 15.769581, lng: 76.190913 },
      },
      {
        distance: { text: "52239.5 mi", value: 52239.5 },
        duration: { text: "36 Minutes, 51 Seconds", value: 2211.7 },
        travel_mode: "driving",
        maneuver: "slight left",
        address: "Bijapur Road",
        start_location: { lat: 15.769581, lng: 76.190913 },
        driving_side: "right",
        end_location: { lat: 15.328446, lng: 76.301796 },
      },
      {
        distance: { text: "1211.9 mi", value: 1211.9 },
        duration: { text: "51 Seconds", value: 51.1 },
        travel_mode: "driving",
        maneuver: "slight left",
        address: "Bijapur Road",
        start_location: { lat: 15.328446, lng: 76.301796 },
        driving_side: "right",
        end_location: { lat: 15.321558, lng: 76.308218 },
      },
      {
        distance: { text: "7572.6 mi", value: 7572.6 },
        duration: { text: "5 Minutes, 20 Seconds", value: 320.3 },
        travel_mode: "driving",
        maneuver: "slight right",
        address: "Hospet Main Road",
        start_location: { lat: 15.321558, lng: 76.308218 },
        driving_side: "right",
        end_location: { lat: 15.270479, lng: 76.345119 },
      },
      {
        distance: { text: "125281.2 mi", value: 125281.2 },
        duration: { text: "1 Hours, 28 Minutes, 46 Seconds", value: 5326.4 },
        travel_mode: "driving",
        maneuver: "slight right",
        address: "Bidar - Lakshmisagara Highway",
        start_location: { lat: 15.270479, lng: 76.345119 },
        driving_side: "right",
        end_location: { lat: 14.235749, lng: 76.404038 },
      },
      {
        distance: { text: "441 mi", value: 441 },
        duration: { text: "39 Seconds", value: 39.5 },
        travel_mode: "driving",
        maneuver: "left",
        address: "Chitradurga Bypass",
        start_location: { lat: 14.235749, lng: 76.404038 },
        driving_side: "right",
        end_location: { lat: 14.235199, lng: 76.408058 },
      },
      {
        distance: { text: "31.4 mi", value: 31.4 },
        duration: { text: "2 Seconds", value: 2.8 },
        travel_mode: "driving",
        maneuver: "slight right",
        address: "Chitradurga Bypass",
        start_location: { lat: 14.235199, lng: 76.408058 },
        driving_side: "right",
        end_location: { lat: 14.235006, lng: 76.408271 },
      },
      {
        distance: { text: "137954.7 mi", value: 137954.7 },
        duration: { text: "1 Hours, 37 Minutes, 23 Seconds", value: 5843.1 },
        travel_mode: "driving",
        maneuver: "slight right",
        address: "Chitradurga Bypass",
        start_location: { lat: 14.235006, lng: 76.408271 },
        driving_side: "right",
        end_location: { lat: 13.302766, lng: 77.161105 },
      },
      {
        distance: { text: "47149.9 mi", value: 47149.9 },
        duration: { text: "36 Minutes, 53 Seconds", value: 2213.3 },
        travel_mode: "driving",
        maneuver: "slight right",
        address: "",
        start_location: { lat: 13.302766, lng: 77.161105 },
        driving_side: "right",
        end_location: { lat: 13.049026, lng: 77.496698 },
      },
      {
        distance: { text: "4465.1 mi", value: 4465.1 },
        duration: { text: "2 Minutes, 59 Seconds", value: 179 },
        travel_mode: "driving",
        maneuver: "slight right",
        address: "Bangalore - Nelamangala Expressway",
        start_location: { lat: 13.049026, lng: 77.496698 },
        driving_side: "right",
        end_location: { lat: 13.032441, lng: 77.53388 },
      },
      {
        distance: { text: "418.9 mi", value: 418.9 },
        duration: { text: "33 Seconds", value: 33.5 },
        travel_mode: "driving",
        maneuver: "slight left",
        address: "Tumkur Road",
        start_location: { lat: 13.032441, lng: 77.53388 },
        driving_side: "right",
        end_location: { lat: 13.030524, lng: 77.537208 },
      },
      {
        distance: { text: "907.1 mi", value: 907.1 },
        duration: { text: "42 Seconds", value: 42.5 },
        travel_mode: "driving",
        maneuver: "right",
        address: "Outer Ring Road",
        start_location: { lat: 13.030524, lng: 77.537208 },
        driving_side: "right",
        end_location: { lat: 13.023402, lng: 77.533281 },
      },
      {
        distance: { text: "11658.2 mi", value: 11658.2 },
        duration: { text: "8 Minutes, 49 Seconds", value: 529.3 },
        travel_mode: "driving",
        maneuver: "slight left",
        address: "Outer Ring Road",
        start_location: { lat: 13.023402, lng: 77.533281 },
        driving_side: "right",
        end_location: { lat: 12.934765, lng: 77.537561 },
      },
      {
        distance: { text: "8187.5 mi", value: 8187.5 },
        duration: { text: "7 Minutes, 42 Seconds", value: 462.6 },
        travel_mode: "driving",
        maneuver: "slight right",
        address: "Outer Ring Road",
        start_location: { lat: 12.934765, lng: 77.537561 },
        driving_side: "right",
        end_location: { lat: 12.907343, lng: 77.600524 },
      },
      {
        distance: { text: "205.3 mi", value: 205.3 },
        duration: { text: "15 Seconds", value: 15.9 },
        travel_mode: "driving",
        maneuver: "right",
        address: "Bannerghatta Road",
        start_location: { lat: 12.907343, lng: 77.600524 },
        driving_side: "right",
        end_location: { lat: 12.905971, lng: 77.601737 },
      },
      {
        distance: { text: "228.9 mi", value: 228.9 },
        duration: { text: "15 Seconds", value: 15.2 },
        travel_mode: "driving",
        maneuver: "left",
        address: "",
        start_location: { lat: 12.905971, lng: 77.601737 },
        driving_side: "right",
        end_location: { lat: 12.906012, lng: 77.603843 },
      },
      {
        distance: { text: "21.7 mi", value: 21.7 },
        duration: { text: "6 Seconds", value: 6.2 },
        travel_mode: "driving",
        maneuver: "right",
        address: "29th Main Road",
        start_location: { lat: 12.906012, lng: 77.603843 },
        driving_side: "right",
        end_location: { lat: 12.905821, lng: 77.603869 },
      },
      {
        distance: { text: "2252.1 mi", value: 2252.1 },
        duration: { text: "2 Minutes, 29 Seconds", value: 149.5 },
        travel_mode: "driving",
        maneuver: "left",
        address: "29th Main Road",
        start_location: { lat: 12.905821, lng: 77.603869 },
        driving_side: "right",
        end_location: { lat: 12.916354, lng: 77.615212 },
      },
      {
        distance: { text: "825.2 mi", value: 825.2 },
        duration: { text: "1 Minutes, 8 Seconds", value: 68.5 },
        travel_mode: "driving",
        maneuver: "right",
        address: "Outer Ring Road",
        start_location: { lat: 12.916354, lng: 77.615212 },
        driving_side: "right",
        end_location: { lat: 12.917294, lng: 77.622579 },
      },
      {
        distance: { text: "34 mi", value: 34 },
        duration: { text: "5 Seconds", value: 5 },
        travel_mode: "driving",
        maneuver: "slight right",
        address: "",
        start_location: { lat: 12.917294, lng: 77.622579 },
        driving_side: "right",
        end_location: { lat: 12.917336, lng: 77.62289 },
      },
      {
        distance: { text: "2383.3 mi", value: 2383.3 },
        duration: { text: "3 Minutes, 4 Seconds", value: 184.8 },
        travel_mode: "driving",
        maneuver: "left",
        address: "Outer Ring Road",
        start_location: { lat: 12.917336, lng: 77.62289 },
        driving_side: "right",
        end_location: { lat: 12.919879, lng: 77.643034 },
      },
      {
        distance: { text: "270.6 mi", value: 270.6 },
        duration: { text: "44 Seconds", value: 44.5 },
        travel_mode: "driving",
        maneuver: "right",
        address: "7th Cross Road",
        start_location: { lat: 12.919879, lng: 77.643034 },
        driving_side: "right",
        end_location: { lat: 12.919575, lng: 77.645481 },
      },
      {
        distance: { text: "53.4 mi", value: 53.4 },
        duration: { text: "10 Seconds", value: 10 },
        travel_mode: "driving",
        maneuver: "left",
        address: "20th Main Road",
        start_location: { lat: 12.919575, lng: 77.645481 },
        driving_side: "right",
        end_location: { lat: 12.920055, lng: 77.645499 },
      },
      {
        distance: { text: "101.4 mi", value: 101.4 },
        duration: { text: "14 Seconds", value: 14.6 },
        travel_mode: "driving",
        maneuver: "right",
        address: "",
        start_location: { lat: 12.920055, lng: 77.645499 },
        driving_side: "right",
        end_location: { lat: 12.919991, lng: 77.646432 },
      },
      {
        distance: { text: "0 mi", value: 0 },
        duration: { text: "", value: 0 },
        travel_mode: "driving",
        address: "",
        start_location: { lat: 12.919991, lng: 77.646432 },
        driving_side: "right",
        end_location: null,
      },
    ];
    var coordinates = [];
    for (var i = 0; i < data.length - 1; i++) {
      coordinates.push(
        L.latLng(data[i].start_location.lat, data[i].start_location.lng)
      );
    }
   



    // var poly = L.polyline(coordinates, {
    //   opacity: 0.5,
    //   color: "#000",
    //   weight: 2,
    // }).addTo(osmMap);
    // poly.removeFrom(osmMap)

    const coords = [
      [-78.936167, 36.0203309],
      [-78.9363688, 36.0203325],
      [-78.9364922, 36.0203341],
      [-78.9366325, 36.0203357],
    ];

    var polylineOptions = {
      color: "black",
      weight: 9,
      opacity: 0.1,
    };

    // var polyline = new L.polyline(coords, polylineOptions).addTo(osmMap);

    //An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/var
    var addressPoints = [
      [-37.8210922667, 175.2209316333, "2"],
      [-37.8210819833, 175.2213903167, "3"],
      [-37.8210881833, 175.2215004833, "3A"],
      [-37.8211946833, 175.2213655333, "1"],
      [-37.8209458667, 175.2214051333, "5"],
      [-37.8208292333, 175.2214374833, "7"],
      [-37.8325816, 175.2238798667, "537"],
      [-37.8315855167, 175.2279767, "454"],
      [-37.8096336833, 175.2223743833, "176"],
      [-37.80970685, 175.2221815833, "178"],
      [-37.8102146667, 175.2211562833, "190"],
      [-37.8088037167, 175.2242227, "156"],
      [-37.8112330167, 175.2193425667, "210"],
      [-37.8116368667, 175.2193005167, "212"],
      [-37.80812645, 175.2255449333, "146"],
      [-37.8080231333, 175.2286383167, "125"],
      [-37.8089538667, 175.2222222333, "174"],
      [-37.8080905833, 175.2275400667, "129"],
      [-37.808811, 175.2227592833, "172"],
      [-37.80832975, 175.2276898167, "131"],
      [-37.8089395333, 175.2281710333, "133"],
      [-37.8093421, 175.2274883167, "135"],
      [-37.8084820833, 175.22601925, "137"],
      [-37.80881015, 175.22622865, "139"],
      [-37.8090947667, 175.2263585667, "141"],
      [-37.8092962333, 175.2244872333, "147"],
      [-37.8091016667, 175.2249140167, "145"],
      [-37.8088785167, 175.2253611667, "143"],
      [-37.80825965, 175.22530115, "148"],
      [-37.80995685, 175.2238554333, "153"],
      [-37.80975435, 175.2238417833, "151"],
      [-37.80950755, 175.2237912, "149"],
      [-37.8092772667, 175.2231980833, "170"],
      [-37.8082753833, 175.20672975, "4"],
      [-37.8078434833, 175.211822, "56"],
      [-37.8083775667, 175.2090812333, "30B"],
      [-37.8084588, 175.2058838167, "174"],
      [-37.8088788333, 175.2062702833, "175"],
      [-37.8091632833, 175.20514875, "182A"],
      [-37.8094891167, 175.20384695, "202"],
      [-37.8156715667, 175.2034881667, "277"],
      [-37.8109189333, 175.2024631, "220"],
      [-37.8108164333, 175.2039622, "219"],
      [-37.8125773667, 175.2026079667, "238"],
      [-37.8125799333, 175.2032824, "241A"],
      [-37.8125869, 175.2037423833, "241C"],
      [-37.8140266833, 175.2025706, "256"],
      [-37.80932, 175.2051094333, "182B"],
      [-37.8098799667, 175.2040444167, "197"],
      [-37.8094298833, 175.20561245, "189"],
      [-37.8172409333, 175.2035291167, "287"],
      [-37.8232166667, 175.22452865, "2028"],
      [-37.8225024333, 175.2249944667, "2022"],
      [-37.82334135, 175.2244748667, "2030"],
      [-37.8229725333, 175.2246809333, "2026"],
      [-37.8224034667, 175.22507345, "2020"],
      [-37.8227806, 175.2248285833, "2024"],
      [-37.8178801, 175.2181871667, "6"],
      [-37.81811315, 175.2180543667, "4"],
      [-37.8181739833, 175.21851995, "1"],
      [-37.81797515, 175.2186312, "3"],
      [-37.8181787, 175.2176995, "2A"],
      [-37.8183385333, 175.21812895, "2"],
      [-37.8293053167, 175.2105357833, "31"],
      [-37.8309444333, 175.21208735, "16"],
      [-37.8306726667, 175.2115020833, "19"],
      [-37.8300903, 175.2120791, "26"],
      [-37.8289416167, 175.2113778333, "33"],
      [-37.8274969167, 175.2113355167, "53"],
      [-37.8199192667, 175.2173622833, "5A"],
      [-37.8200392833, 175.2174100167, "3"],
      [-37.8196328, 175.2167642, "18"],
      [-37.81752585, 175.2155467667, "22C"],
      [-37.81766615, 175.2153714167, "22B"],
      [-37.8179022667, 175.2151616833, "22A"],
      [-37.8191980333, 175.21664245, "20A"],
      [-37.81799325, 175.21565925, "20C"],
      [-37.8187486333, 175.2165228667, "20B"],
      [-37.81964875, 175.2172874167, "7"],
      [-37.81925545, 175.2171617, "11"],
      [-37.8190491667, 175.2170928333, "13"],
      [-37.8194515667, 175.2172147167, "9"],
      [-37.81981045, 175.21733245, "5B"],
      [-37.81876595, 175.2172445167, "15B"],
      [-37.8185999167, 175.2172441, "17A"],
      [-37.81816745, 175.21725905, "21B"],
      [-37.8182157167, 175.2164626333, "24"],
      [-37.8180109667, 175.2173984167, "23A"],
      [-37.8179918, 175.217159, "23B"],
      [-37.8188473167, 175.2170330333, "15"],
      [-37.8186481333, 175.2169800667, "17"],
      [-37.8184132, 175.2169327333, "19"],
      [-37.8202288333, 175.2174746333, "1"],
      [-37.818193, 175.2169955667, "21"],
      [-37.8178000833, 175.21733275, "25"],
      [-37.8176839, 175.2168488333, "26"],
      [-37.8198172, 175.2204960667, "5"],
      [-37.819986, 175.22049635, "3"],
      [-37.8197666, 175.2200825, "4"],
      [-37.8193835833, 175.2191669667, "10"],
      [-37.8193426333, 175.2198626667, "11"],
      [-37.8192171667, 175.2191711, "12"],
      [-37.8192621333, 175.2196364167, "13"],
      [-37.8195289667, 175.2193943167, "8"],
      [-37.81946, 175.2201499167, "9"],
      [-37.8196037833, 175.219674, "6"],
      [-37.8194712, 175.2204032, "7A"],
      [-37.8196381, 175.2203709333, "7"],
      [-37.8200137667, 175.2201364333, "2"],
      [-37.8191725167, 175.2193772833, "14"],
      [-37.8214417333, 175.2256822167, "4"],
      [-37.8210291, 175.2259429667, "8"],
      [-37.8212328333, 175.2258132, "6"],
      [-37.8216819833, 175.2253209, "3"],
      [-37.8334697167, 175.2038651667, "326"],
      [-37.8322603667, 175.2028621167, "317"],
      [-37.8322013667, 175.2046802667, "1/341"],
      [-37.8320576167, 175.2165535833, "435"],
      [-37.8319540333, 175.20506915, "2/341"],
      [-37.8316975667, 175.2053442333, "3/341"],
      [-37.8328229833, 175.2062598, "346"],
      [-37.83161565, 175.2074915, "355"],
      [-37.83219305, 175.20629425, "347"],
      [-37.8328549, 175.2080619667, "362"],
      [-37.8321289667, 175.2084019333, "367"],
      [-37.8322225167, 175.2120427667, "397"],
      [-37.8321649, 175.21119325, "393"],
      [-37.8321458833, 175.2131246333, "407"],
      [-37.8327043833, 175.21377405, "416"],
      [-37.8321267167, 175.2144058167, "417"],
      [-37.83212555, 175.2096521333, "373"],
      [-37.8331028667, 175.20928495, "366"],
      [-37.82866875, 175.22177625, "563"],
      [-37.8295602, 175.21924335, "582"],
      [-37.8304707833, 175.2182986167, "590"],
      [-37.83086, 175.2180687667, "592"],
      [-37.8328604833, 175.2172892167, "618"],
      [-37.8342575667, 175.2168357833, "638"],
      [-37.8239713, 175.2245693667, "504"],
      [-37.8365260167, 175.2170911, "673"],
      [-37.8233928833, 175.2249669167, "492"],
      [-37.8248650167, 175.2246300833, "509"],
      [-37.8191798333, 175.2265331667, "435"],
      [-37.8143243333, 175.2310940167, "368"],
      [-37.81459255, 175.2320046, "363"],
      [-37.81127515, 175.2356499167, "311"],
      [-37.8126359667, 175.2340855167, "333"],
      [-37.8096158333, 175.2375218167, "293"],
      [-37.8315868667, 175.2177722833, "604"],
      [-37.8160177667, 175.2299268333, "391"],
      [-37.8204715667, 175.2265481833, "456"],
      [-37.8206352, 175.2265670333, "458"],
      [-37.8208412667, 175.2265323333, "460"],
      [-37.8210184333, 175.22648325, "462"],
      [-37.8212643833, 175.2270422167, "465"],
      [-37.82119945, 175.2264274333, "464"],
      [-37.82136485, 175.2263145667, "466"],
      [-37.8215261, 175.22684075, "467"],
      [-37.8215301833, 175.2262078, "468"],
      [-37.8217701667, 175.2266360167, "1/471"],
      [-37.8218376833, 175.22686725, "2/471"],
      [-37.8217084667, 175.2260839667, "472"],
      [-37.8219782333, 175.2265028333, "475"],
      [-37.8218988833, 175.2259723, "476"],
      [-37.8223939333, 175.2262447, "479"],
      [-37.8223048667, 175.2256582833, "480"],
      [-37.8226657, 175.2261230833, "481"],
      [-37.8224199, 175.2255487833, "482"],
      [-37.8229134167, 175.2259527833, "485"],
      [-37.8226937833, 175.2253693167, "486"],
      [-37.8231509667, 175.2258170333, "487"],
      [-37.82295265, 175.2252571167, "488"],
      [-37.8233779, 175.2256743833, "489"],
      [-37.8232052667, 175.2251109333, "490"],
      [-37.8236200333, 175.22553395, "493"],
      [-37.82385775, 175.2253390833, "495"],
      [-37.8203220167, 175.22650925, "454"],
      [-37.8179795333, 175.2262826, "428"],
      [-37.81038215, 175.2365298167, "303"],
      [-37.8161746667, 175.2297239833, "393"],
      [-37.8083635333, 175.233955, "294"],
      [-37.82029495, 175.2214968167, "39"],
      [-37.8204754333, 175.2247793333, "12B"],
      [-37.8205440833, 175.22344905, "23"],
      [-37.8195974333, 175.2254019333, "2"],
      [-37.8210801, 175.2237748667, "20A"],
      [-37.8209057333, 175.22389775, "18"],
      [-37.8208016833, 175.2221582833, "32"],
      [-37.8209372667, 175.2236919, "20"],
      [-37.8210586833, 175.22351925, "22B"],
      [-37.82092905, 175.2234855333, "22"],
      [-37.8208587333, 175.2231887667, "24"],
      [-37.8210241167, 175.2230882, "24B"],
      [-37.8208547833, 175.2229410667, "26"],
      [-37.8209917, 175.2228447667, "26B"],
      [-37.82097645, 175.2227176167, "28B"],
      [-37.8208099167, 175.2226765167, "28"],
      [-37.8207666833, 175.2224338833, "30"],
      [-37.8209508833, 175.2222094167, "32B"],
      [-37.82076515, 175.2219195167, "34A"],
      [-37.8207399667, 175.2218131667, "34B"],
      [-37.8203075833, 175.2240482833, "19"],
      [-37.8205368167, 175.2237746667, "21"],
      [-37.8205025833, 175.2231658, "25A"],
      [-37.820465, 175.2229733667, "27"],
      [-37.82043535, 175.2227387, "29"],
      [-37.8204582, 175.2225319667, "31"],
      [-37.82024115, 175.2224347833, "31B"],
      [-37.8203792333, 175.2222631667, "33"],
      [-37.82034095, 175.2219843, "35"],
      [-37.8201566167, 175.2219446, "35B"],
      [-37.82030575, 175.2217594333, "37"],
      [-37.8202966833, 175.2233158167, "25"],
      [-37.8192714167, 175.2253842667, "1"],
      [-37.81969695, 175.22516645, "4"],
      [-37.8194904667, 175.22468815, "5"],
      [-37.8198524333, 175.2249096667, "6"],
      [-37.8200581833, 175.2247122, "8"],
      [-37.8193447, 175.2244639667, "5C"],
      [-37.8208238, 175.2241340167, "16"],
      [-37.8193183667, 175.22515695, "1A"],
      [-37.81940575, 175.2249383333, "3"],
      [-37.8211855167, 175.2242545333, "18A"],
      [-37.8207094833, 175.22430275, "14"],
      [-37.82027725, 175.22488135, "10A"],
      [-37.8202305833, 175.2245652667, "10"],
      [-37.8205049667, 175.2244201333, "12"],
      [-37.8196320333, 175.2255586, "22"],
      [-37.8209711, 175.2250444667, "8"],
      [-37.82120665, 175.2252942833, "5"],
      [-37.8210184, 175.2254290333, "7"],
      [-37.8213430333, 175.2252086167, "3"],
      [-37.8207887833, 175.2251555667, "10"],
      [-37.82060805, 175.2257042333, "13"],
      [-37.8208330333, 175.22553905, "9"],
      [-37.8216988833, 175.2249665667, "1"],
      [-37.8215665833, 175.2246573333, "2"],
      [-37.8213729, 175.2247789333, "4"],
      [-37.8211700667, 175.2249324333, "6"],
      [-37.8205967667, 175.2252867, "12"],
      [-37.8204008833, 175.2254234667, "14"],
      [-37.82043265, 175.22582195, "15"],
      [-37.8202037333, 175.2255415833, "16"],
      [-37.8200154333, 175.2256547667, "18"],
      [-37.8197443167, 175.2256164833, "20"],
      [-37.8202814333, 175.22590955, "17"],
      [-37.8202967667, 175.21462555, "98"],
      [-37.82204485, 175.21819735, "61B"],
      [-37.8224241, 175.2179326667, "61C"],
      [-37.8215043167, 175.2227943833, "24"],
      [-37.8219082, 175.2255408167, "8"],
      [-37.8216963, 175.2240856667, "14"],
      [-37.8213418333, 175.2188135667, "55"],
      [-37.8204966333, 175.2183406333, "54A"],
      [-37.8221799833, 175.21122085, "139"],
      [-37.8217387, 175.22431625, "12"],
      [-37.8218650167, 175.2149734167, "107"],
      [-37.8214083333, 175.2220152667, "30"],
      [-37.8213738333, 175.2217301, "32"],
      [-37.8221598167, 175.2247839333, "9"],
      [-37.8216356, 175.2235610667, "18"],
      [-37.8212188167, 175.2221387333, "30B"],
      [-37.8200466667, 175.2166111, "84A"],
      [-37.8216679333, 175.2238393333, "16"],
      [-37.8211582833, 175.22031685, "34"],
      [-37.8221918667, 175.2250378333, "7"],
      [-37.8187410167, 175.2067290167, "170C"],
      [-37.8206532, 175.2170745667, "81"],
      [-37.8212348667, 175.2181024167, "67"],
      [-37.8213057667, 175.2185351167, "57"],
      [-37.8214571, 175.2145877333, "110"],
      [-37.82207085, 175.2136727167, "121"],
      [-37.82190125, 175.2123493, "130"],
      [-37.8207519667, 175.2102467333, "150"],
      [-37.8212159, 175.2096407, "159"],
      [-37.8208313833, 175.2067756, "172"],
      [-37.8214413333, 175.2222779833, "28"],
      [-37.8206921333, 175.2182549, "54"],
      [-37.82043975, 175.2181215, "56"],
      [-37.8218791, 175.2252452167, "10"],
      [-37.82029435, 175.2169818, "84"],
      [-37.8215885167, 175.22308725, "22"],
      [-37.8215897333, 175.2233113167, "20"],
      [-37.82167455, 175.2183345, "61A"],
      [-37.8217164667, 175.2179857333, "63"],
      [-37.82147385, 175.22253565, "26"],
      [-37.8206765333, 175.2160304333, "86"],
      [-37.8188941, 175.2069437, "170A"],
      [-37.8188068333, 175.2068104833, "170B"],
      [-37.8193742667, 175.2085580333, "170"],
      [-37.8214388167, 175.2200072, "45"],
      [-37.8209547167, 175.2157149167, "92"],
      [-37.82088565, 175.2164849333, "85"],
      [-37.82136235, 175.2159546667, "97"],
      [-37.8219607333, 175.2232987, "19"],
      [-37.8210501, 175.2179753833, "69"],
      [-37.8212466667, 175.2222175833, "28A"],
      [-37.8213836167, 175.22300555, "22A"],
      [-37.821339, 175.2227439167, "24A"],
      [-37.8208144333, 175.2173117167, "77"],
      [-37.8189363667, 175.2211582333, "25"],
      [-37.8196676167, 175.2209947333, "26B"],
      [-37.8194113, 175.2211991, "26"],
      [-37.81883205, 175.2209747, "27"],
      [-37.8186925833, 175.2207728833, "29"],
      [-37.8199931833, 175.2240802167, "2"],
      [-37.8191759333, 175.2208279333, "30"],
      [-37.81835395, 175.2196571667, "39"],
      [-37.8198807333, 175.2235938167, "6"],
      [-37.8194567833, 175.22349015, "7"],
      [-37.8200507833, 175.21933875, "58"],
      [-37.8197902167, 175.2182408, "59A"],
      [-37.81991635, 175.21797195, "59B"],
      [-37.8198223833, 175.2179361833, "59C"],
      [-37.8201049333, 175.2197347167, "60"],
      [-37.8199380333, 175.21836645, "61A"],
      [-37.82003775, 175.2182443833, "61B"],
      [-37.8200944167, 175.21803015, "61C"],
      [-37.8201259667, 175.2185610667, "63"],
      [-37.82026275, 175.2188001167, "65"],
      [-37.8188917833, 175.2203729333, "34"],
      [-37.8184921333, 175.2203832, "33"],
      [-37.8190387167, 175.2206181333, "32"],
      [-37.81968705, 175.2224253667, "16"],
      [-37.81981205, 175.223119, "10"],
      [-37.8193882833, 175.2229798333, "11"],
      [-37.8190901167, 175.2227829833, "13B"],
      [-37.8193593, 175.2227247833, "13"],
      [-37.81993935, 175.2226893333, "14B"],
      [-37.81842725, 175.2201474167, "35"],
      [-37.8187965833, 175.2200475333, "36"],
      [-37.8183878167, 175.2198735667, "37"],
      [-37.8188702167, 175.2196982333, "38B"],
      [-37.82027885, 175.2209890667, "82"],
      [-37.8199839667, 175.2190668, "56"],
      [-37.8187008333, 175.21973745, "38A"],
      [-37.8196820167, 175.22262455, "14"],
      [-37.8186528333, 175.2191018, "42"],
      [-37.8182912167, 175.21915535, "43"],
      [-37.81870525, 175.21945675, "40"],
      [-37.8195044333, 175.2214081833, "24"],
      [-37.81857075, 175.2205925167, "31"],
      [-37.8195656167, 175.2181396, "57"],
      [-37.8198411667, 175.2213911167, "24A"],
      [-37.8195851667, 175.2240869667, "3"],
      [-37.8192829167, 175.2239720167, "3A"],
      [-37.8193257, 175.2224725667, "15"],
      [-37.8197290167, 175.2224129833, "16A"],
      [-37.8196499333, 175.2221262667, "18"],
      [-37.8196755333, 175.2243193333, "1"],
      [-37.8192091667, 175.22166805, "21"],
      [-37.81957585, 175.22166585, "22"],
      [-37.8199106833, 175.2238436, "4"],
      [-37.81953715, 175.22372785, "5A"],
      [-37.8193377833, 175.22378105, "5"],
      [-37.8189702833, 175.2184597333, "46"],
      [-37.8185876167, 175.21821495, "47A"],
      [-37.8185706333, 175.2178869167, "47B"],
      [-37.8191945667, 175.21845965, "48"],
      [-37.8188482167, 175.2176680833, "49"],
      [-37.8194043667, 175.21852395, "50"],
      [-37.8196233333, 175.2186248333, "52"],
      [-37.81920055, 175.2179787167, "53"],
      [-37.8198255, 175.2188011167, "54"],
      [-37.8205994333, 175.2207248667, "81"],
      [-37.8193045333, 175.2222075667, "17"],
      [-37.8205621167, 175.2204520167, "79"],
      [-37.8180799333, 175.2194407, "41A"],
      [-37.8208301833, 175.2206735833, "81A"],
      [-37.8202558, 175.2206809333, "80"],
      [-37.81941275, 175.21804965, "55"],
      [-37.8190239, 175.2179808833, "51"],
      [-37.8187854, 175.2180712167, "47"],
      [-37.8187476667, 175.2186516333, "44"],
      [-37.8182977, 175.21889655, "45"],
      [-37.81831675, 175.2194069833, "41"],
      [-37.8192735167, 175.2219502167, "19"],
      [-37.8196219167, 175.22189825, "20"],
      [-37.81962665, 175.2216432667, "22A"],
      [-37.8192782833, 175.2209942, "28"],
      [-37.8208129833, 175.2209176833, "83A"],
      [-37.8206351167, 175.2209705667, "83"],
      [-37.8203109333, 175.2212402667, "84"],
      [-37.81909575, 175.22139795, "23"],
      [-37.8197787167, 175.2228814, "12"],
      [-37.8195628333, 175.21791605, "57A"],
      [-37.8198373833, 175.2233606833, "8"],
      [-37.8194342167, 175.22322975, "9"],
    ];
    var Cluster = L.markerClusterGroup({
      spiderfyOnMaxZoom: false,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      disableClusteringAtZoom: osmMap.getMaxZoom(),
    });
    // for (var i = 0; i < addressPoints.length; i++) {
    //   var a = addressPoints[i];
    //   var title = a[2];
    //   var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
    //   marker.addTo(osmMap);
    //   //Cluster1.addLayer(marker[0]);
    // }
    for (var i = 0; i < addressPoints.length; i++) {
      var a = addressPoints[i];
      var title = a[2];
      var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
      marker.bindPopup(title);
      Cluster.addLayer(marker);
    }
 
    osmMap.addLayer(Cluster);
    console.log("Cluster");   
console.log(Cluster._topClusterLevel.getAllChildMarkers());
    console.log(Cluster);

    Cluster.on("clustermouseover", function (c) {
      var popup = L.popup()
        .setLatLng(c.layer.getLatLng())
        .setContent(c.layer._childCount + " Locations(click to Zoom)")
        .openOn(osmMap);
    }).on("clustermouseout", function (c) {
      osmMap.closePopup();
    });
    Cluster = null;
  },
]);

/*           var map = L.map('map', {
                    center: new L.LatLng(40.73547,-73.987856),
                    zoom: 12,
                   
                    maxZoom: 18,
                    minZoom: 12
                });
        
        
        
                // create the tile layer with correct attribution
                var tilesURL='http://tile.stamen.com/terrain/{z}/{x}/{y}.png';
                var tilesAttrib='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.';
                var tiles = new L.TileLayer(tilesURL, {
                    attribution: tilesAttrib, 
                    opacity: 0.7,
                    detectRetina: true,
                    unloadInvisibleTiles: true,
                    updateWhenIdle: true,
                    reuseTiles: true
                });
                tiles.addTo(map);
        


var mysoreLatLon = [12.311827, 76.652985]
// Focussed on Mysore
var map = L.map('mysore_map').setView(mysoreLatLon, 4);

//map.attributionControl.setPosition("topright");
//map.attributionControl.addAttribution("HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello")
//				
				
// Using openstreetmap layer
L.tileLayer.wms('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// angular.extend($scope, {
//     center: {
//       lat: 51.1642292,
//       lng: 10.4541194,
//       zoom: 6
//     },

//     defaults: {
//       zoomControl: false
//     },

//     layers: {
//       baselayers: {
//         osm: {
//             name: 'OpenStreetMap',
//             url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//             type: 'xyz'
//         }
//       }
//     }
//   })

*/
