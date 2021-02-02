const body = document.querySelector("body"); // body 태그 선택

const IMG_NUMBER = 3; // 이미지 갯수

function paintImage(imgNumger) {
    const image = new Image(); // 이미지 객체 생성
    image.src = `images/${imgNumger + 1}.jpg`; // 랜덤한 값을 이용해서 이미지 선택하기
    image.classList.add("bgImage"); // 클래스 이름 생성
    // prepend - 부모의 자식 요소로 추가되나 그 위치가 맨 뒤가 아닌 맨 앞으로 추가됨. appendChild()는 맨뒤에 첨가됨. 구별하기
    body.prepend(image); // 이미지 객체 추가하기
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER); //IMG_NUMBER 범위내에서 랜덤으로 숫자 생성
    return number;
}

function init() {
    const randomNumber = genRandom(); // 랜덤으로 숫자 생성 (1~3까지)
    paintImage(randomNumber); // 이미지 가져오기
}

init();