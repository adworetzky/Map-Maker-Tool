const neighborhoodData = [
  {
    label: 'Inman Park',
    lat: '33.75990458',
    lon: '-84.35773225',
  },
  {
    label: 'Candler Park',
    lat: '33.76497308',
    lon: '-84.34168854',
  },
  {
    label: 'Decatur',
    lat: '33.77390975',
    lon: '-84.29904012',
  },
  {
    label: 'Cabbagetown',
    lat: '33.74979168',
    lon: '-84.3654271',
  },
  {
    label: 'Old Fourth Ward',
    lat: '33.76410976',
    lon: '-84.37188871',
  },
  {
    label: 'Grant Park',
    lat: '33.73711114',
    lon: '-84.36831293',
  },
];
const suburbData = [
  {
    label: 'Roswell',
    lat: '34.03671347',
    lon: '-84.34396761',
  },
  {
    label: 'Johns Creek',
    lat: '34.02920038',
    lon: '-84.19915627',
  },
  {
    label: 'Alpharetta',
    lat: '34.07773371',
    lon: '-84.30011637',
  },
  {
    label: 'Suwanee',
    lat: '34.0516069',
    lon: '-84.07126173',
  },
  {
    label: 'Sandy Springs',
    lat: '33.9295274',
    lon: '-84.37364772',
  },
  {
    label: 'Dunwoody',
    lat: '33.94637631',
    lon: '-84.33476582',
  },
];

var geodotIconBlue = L.icon({
  iconUrl: './assets/geodotblue.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});
var geodotIconRed = L.icon({
  iconUrl: './assets/geodotred.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

var map = L.map('map').setView([33.931689562790815, -84.26593824911826], 11);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/adworetzky/cl0lar6ce000h15r06z9rsu0v/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWR3b3JldHpreSIsImEiOiJja3hjNW5lcjMwdGx6MnF0aDl3NTI5cXp3In0.IaZ6uq5e0I-RAa81uerhJw',
  {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
  }
).addTo(map);
// L.control.BigImage().addTo(map);
drawPoints(neighborhoodData, geodotIconBlue);
drawPoints(suburbData, geodotIconRed);

function drawPoints(array, icon) {
  array.forEach((element) => {
    L.marker([element.lat, element.lon], { icon: icon })
      .bindTooltip(element.label)
      .addTo(map);
  });
}
