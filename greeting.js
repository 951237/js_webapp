const form = document.querySelector(".js-form"), // 클래스 js-form 
    input = form.querySelector("input"), // input 태그
    greeting = document.querySelector(".js-greeting"); // 클래스 js-greeting

const USER_LS = "currentUser", // 로컬스토리지 저장할 유저 변수
    SHOWING_CN = "showing"; // 클래스 이름

function saveName(text) { // 로컬스토리지에 유저이름 저장
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) { // submit 처리 함수
    event.preventDefault(); // 새로고침 방지
    const currentValue = input.value; // 변수에 input값 넣기
    paintGreeting(currentValue); // 인사말 생성
    saveName(currentValue); // 이름 로컬스토리지에 저장하기
}

function askFormName() { // 폼에 이름 묻기 함수
    form.classList.add(SHOWING_CN); // 클래스 넣기
    form.addEventListener("submit", handleSubmit); // submit 이벤트하기
}

function paintGreeting(text) { // 인사말 생성하기
    form.classList.remove(SHOWING_CN); // 폼에서 클래스 이름 삭제
    greeting.classList.add(SHOWING_CN); // h4 태그에 클래스 넣기
    greeting.innerText = `Hello ${text}`; // h4태그 문구 바꾸기
}

function loadName() { // 이름 가져오기
    const currentUser = localStorage.getItem(USER_LS); // 로컬스토리지 변수
    if (currentUser === null) { // 로컬스토리지에 변수값이 비어 있는 경우
        askFormName(); // 이름묻기 함수 활성화
    } else {
        paintGreeting(currentUser); // 인사말 문구 생성
    }
}

function init() {
    loadName();
}

init();