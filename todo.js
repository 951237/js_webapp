const toDoForm = document.querySelector(".js-toDoForm"), // form 구문 배당
    toDoInput = toDoForm.querySelector("input"), // input 값 배당
    toDoList = document.querySelector(".js-toDoList"); // ul 구문 배당

const TODO_LS = "toDos"; // 로컬스토리지에 변수이름 설정

function paintToDo(text) { // todo 만들기 함수
    const li = document.createElement("li"); // li 태그 생성
    const delBtn = document.createElement("button"); // button 태그 생성
    delBtn.innerText = "X"; // 버튼에 텍스트값 넣기
    const span = document.createElement("span"); // span 태그 생성
    span.innerText = text; // span에 텍스트 넣기
    li.appendChild(delBtn); // li태그밑에 버튼 태그 생성, 순서 1
    li.appendChild(span); // li태그 밑에 span 태그 생성, 순서 2
    toDoList.appendChild(li); // ul 태그 밑에 li 태그 넣기
}

function handleSubmit(event) {
    event.preventDefault(); // 입력값에도 새로고침 방지
    const currentValue = toDoInput.value; // currentValue 값 설정
    paintToDo(currentValue); // 함수에 값을 전달
    toDoInput.value = ""; // toDoInput값 초기화
}

function loadTodo() {
    const toDos = localStorage.getItem(TODO_LS); // 로컬스토리지에 변수 생성
    if (toDos !== null) { // 로컬스토리지 변수값이 비어 있으면

    }
}

function init() {
    loadTodo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();