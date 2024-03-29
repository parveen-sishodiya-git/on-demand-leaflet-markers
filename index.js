const app = angular.module("app", []);
app.controller("wnwdController", function ($scope) {


    $scope.title = "Windward"

    var map = L.map('map').setView([22.805, 82.0], 5);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicGFydmVlbm1hcCIsImEiOiJja2ttc2trdGwzYmNoMm9wYTdsNnZmYTdkIn0.I0PS604HIje1rmMpkHKTiQ'
    }).addTo(map);

    var markerLayer = L.canvasIconLayer({}).addTo(map);


    let greenIcon = L.icon({
        iconUrl: "./assets/img/icon/1tgreen.png",
        iconSize: [20, 20],
        iconAnchor: [10, 9]
    });

    let redIcon = L.icon({
        iconUrl: "./assets/img/icon/1tred.png",
        iconSize: [20, 20],
        iconAnchor: [10, 9]
    });

    let purpleIcon = L.icon({
        iconUrl: "./assets/img/icon/1tpurple.png",
        iconSize: [20, 20],
        iconAnchor: [10, 9],
        className: 'blinker'
    });

    let brownIcon = L.icon({
        iconUrl: "./assets/img/icon/1tbrown.png",
        iconSize: [20, 20],
        iconAnchor: [10, 9]
    });

    var gicon = L.icon({
        iconUrl: 'assets/img/icon/1tbrown.png',
        iconSize: [20, 20],
        iconAnchor: [10, 9]
    });



    let markers = [];

    for (i = 0; i < 20000; i++) {
        let latlongs = [];
        latlongs.push(getRandomInRange(-180, 180, 3))
        latlongs.push(getRandomInRange(-180, 180, 3))
        let marker = L.marker(latlongs, {
            icon: getIcon()
        }).bindPopup("I Am " + i);
        markers.push(marker);
    }

    markerLayer.addLayers(markers);

    $scope.showMarkerLayer = () => {
        map.addLayer(markerLayer);
    }

    $scope.hideMarkerLayer = () => {
        map.removeLayer(markerLayer);
    }

    function getIcon() {
        let icon = Math.random() * 10;
        if (icon <= 1) {
            return greenIcon;
        }
        if (icon <= 2) {
            return brownIcon;
        }

        if (icon <= 3) {
            return purpleIcon;
        }
        return redIcon;
    }

    function getIconUrl() {
        let icon = Math.random() * 10;
        if (icon <= 1) {
            return "./assets/img/icon/1tgreen.png";
        }
        if (icon <= 2) {
            return "./assets/img/icon/1tbrown.png";
        }

        if (icon <= 3) {
            return "./assets/img/icon/1tpurple.png";
        }
        return "./assets/img/icon/1tred.png";
    }

    function getIconColor() {
        let icon = Math.random() * 10;
        if (icon <= 1) {
            return "green";
        }
        if (icon <= 2) {
            return "brown";
        }

        if (icon <= 3) {
            return "purple";
        }
        return "red";
    }


    function getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

    //vanila code
    /*
     let toplatinner = 36.555554965543216;
    let rightlonginner = 115.7871101796627;
    let bottomlatinner = 7.57163356840944;
    let leftlonginner = 48.28711017966271;


    $scope.title = "Windward"
    var map = L.map('map').setView([22.805, 82.0], 5);

    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicGFydmVlbm1hcCIsImEiOiJja2ttc2trdGwzYmNoMm9wYTdsNnZmYTdkIn0.I0PS604HIje1rmMpkHKTiQ'
    }).addTo(map);

    map.on('moveend', () => {
        const bounds = map.getBounds();

        console.log(bounds['_northEast']['lat']);
        console.log(bounds['_northEast']['lng']);
        console.log(bounds['_southWest']['lat']);
        console.log(bounds['_southWest']['lng']);



        toplatinner = bounds['_northEast']['lat'];
        rightlonginner = bounds['_northEast']['lng'];
        bottomlatinner = bounds['_southWest']['lat'];
        leftlonginner = bounds['_southWest']['lng'];
        //plotIconsOnLoad();
    })

    let layer = L.layerGroup();
    map.addLayer(layer);

    
    let markers = [];
    let marker;

    for (i = 0; i < 10000; i++) {
        let latlongs = [];
        marker = {};
        latlongs.push(getRandomInRange(-180, 180, 3))
        latlongs.push(getRandomInRange(-180, 180, 3))
        marker['latlong'] = latlongs;
        marker['iconUrl'] = getIconUrl();
        marker['color'] = getIconColor();
        markers.push(marker);
    }

    let greenIcon = L.icon({
        iconUrl: "./assets/img/icon/1tgreen.png",
        iconSize: [25, 25],
        className: 'mystyle'
    });

    let redIcon = L.icon({
        iconUrl: "./assets/img/icon/1tred.png",
        iconSize: [25, 25],
        className: 'mystyle'
    });

    let purpleIcon = L.icon({
        iconUrl: "./assets/img/icon/1tpurple.png",
        iconSize: [25, 25],
        className: 'mystyle'
    });

    let brownIcon = L.icon({
        iconUrl: "./assets/img/icon/1tbrown.png",
        iconSize: [25, 25],
        className: 'mystyle'
    });

    function getIcon() {
        let icon = Math.random() * 10;
        if (icon <= 1) {
            return greenIcon;
        }
        if (icon <= 2) {
            return brownIcon;
        }

        if (icon <= 3) {
            return purpleIcon;
        }
        return redIcon;
    }

    function getIconUrl() {
        let icon = Math.random() * 10;
        if (icon <= 1) {
            return "./assets/img/icon/1tgreen.png";
        }
        if (icon <= 2) {
            return "./assets/img/icon/1tbrown.png";
        }

        if (icon <= 3) {
            return "./assets/img/icon/1tpurple.png";
        }
        return "./assets/img/icon/1tred.png";
    }

    function getIconColor() {
        let icon = Math.random() * 10;
        if (icon <= 1) {
            return "green";
        }
        if (icon <= 2) {
            return "brown";
        }

        if (icon <= 3) {
            return "purple";
        }
        return "red";
    }

    function getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

    function plotIconsOnLoad() {
        console.log("plotting icons");
        layer.clearLayers();
        let nom = 0;
        for (marker in markers) {
            let latlongs = markers[marker].latlong;
            if (latlongs[0] < toplatinner && latlongs[0] > bottomlatinner && latlongs[1] > leftlonginner && latlongs[1] < rightlonginner) {
                console.log("icons passed");
                nom++;
                L.circleMarker(latlongs, {
                    icon: L.icon({
                        iconUrl: markers[marker].iconUrl,
                        iconSize: [17, 17],
                        className: 'mystyle'
                    }),
                    color:markers[marker].color,
                    renderer:myRenderer
                }).addTo(layer);
            }
        }
        $scope.$evalAsync($scope.noofmarkers = nom);
    }

    function plotIconsOnFrame() {
        for (i = 0; i < 6000; i++) {
            let latlongs = [];
            latlongs.push(getRandomInRange(-180, 180, 3))
            latlongs.push(getRandomInRange(-180, 180, 3))
            if (latlongs[0] > toplatinner && latlongs[0] < bottomlatinner && latlongs[1] > leftlonginner && latlongs[1] < rightlonginner) {
                L.marker(latlongs, {
                    icon: getIcon()
                }).addTo(map);
            }
        }
    }

    function mapmoving(params) {

    }

    map.on('load', plotIconsOnLoad())

     map.on('move', plotIconsOnLoad)
    */


})