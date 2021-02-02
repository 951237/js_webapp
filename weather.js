// openweathermap API키
const API_KEY = "816ede989d9c1e1da8aafdf4b3186708";
const COORDS = "coords";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj)); // 리스트를 텍스트로 저장하기 
}

function handleGeoSucces(position) { // 위치의 위도,경도 좌표 가져오기
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도
    const coordsObj = { // 위도 경도 저장하기
        latitude,
        longitude
    };
    saveCoords(coordsObj); // 로컬스토리지에 저장하기
}

function handleGeoError() {
    console.log("Cant access geo location"); // 좌표가져오지 못할 때 메세지 출력
}

function askForCoords() { // 좌표 구하기
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); // 현재 위치 구하기
}

function loadCoords() { // 위치정보 가져오기
    const loadedCords = localStorage.getItem(COORDS); // 로컬스토리지 위치정보 저장
    if (loadedCords === null) { // 로컬스토리지에 정보가 없으면
        askForCoords(); // 정보 요총하기
    } else {
        // getweather       // 있으면 날씨정보 가져오기
    }
}

function init() {
    loadCoords(); // 위치정보 확인하고 날씨정보 가져오기
}

init();