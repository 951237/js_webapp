const toDoForm = document.querySelector(".js-toDoForm"), // form 구문 배당
    toDoInput = toDoForm.querySelector("input"), // input 값 배당
    toDoList = document.querySelector(".js-toDoList"); // ul 구문 배당

const TODO_LS = "toDos"; // 로컬스토리지에 변수이름 설정

// const와 let의 차이점
// let - 변수 재선언 불가 but 재할당은 가능
// const - 변수 재선언, 재할당 모두 불가능
let toDos = []; // 리스트 생성 const => let의 차이, toDos를 재할당 해야해서 선언을 바꿈.

function deleteToDo(event) { // todo 지우기
    const btn = event.target; // 클릭한 목표를 btn에 저장
    const li = btn.parentNode; // 버튼의 부모를 li로 저장
    toDoList.removeChild(li); // ul태그의 li를 지우기
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id); // toDos리시트 내의 값의 id와 li의 id가 같지 않은 것만 추출해서 리스트로 생성하기 filter() 함수의 활용
    });
    toDos = cleanToDos; // 새롭게 생성한 리스트를 todos리스트로 새롭게 저장
    saveToDos(); // toDos를 로컬스토리지에 저장하기
}

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos)); // 배열의 값을 텍스트 형태로 로컬스토리지에 저장.
    // 로컬스토리지에 배열자체를 저장할 수 없어서 JSON.stringify 함수를 사용함.
}

function paintToDo(text) { // todo 만들기 함수
    const li = document.createElement("li"); // li 태그 생성
    const delBtn = document.createElement("button"); // button 태그 생성
    const span = document.createElement("span"); // span 태그 생성
    const newId = toDos.length + 1; // 변수를 배열의 갯수 + 1로 저장
    delBtn.innerText = "X"; // 버튼에 텍스트값 넣기
    delBtn.addEventListener("click", deleteToDo); // 클릭하면 할일지우기
    span.innerText = text; // span에 텍스트 넣기
    li.appendChild(delBtn); // li태그밑에 버튼 태그 생성, 순서 1
    li.appendChild(span); // li태그 밑에 span 태그 생성, 순서 2
    li.id = newId; // li태그의 id를 newId로 넣기
    toDoList.appendChild(li); // ul 태그 밑에 li 태그 넣기
    const toDoObj = { // 딕셔너리 생성
        text: text,
        id: newId
    };
    toDos.push(toDoObj); // 리스트에 오브젝트를 넣기
    saveToDos(); // 로컬스토리지에 배열 저장
}

function handleSubmit(event) {
    event.preventDefault(); // 입력값에도 새로고침 방지
    const currentValue = toDoInput.value; // currentValue 값 설정
    paintToDo(currentValue); // 함수에 값을 전달
    toDoInput.value = ""; // toDoInput값 초기화
}

function loadTodo() {
    const loadedToDos = localStorage.getItem(TODO_LS); // 로컬스토리지에 변수 생성
    if (loadedToDos !== null) { // 로컬스토리지 변수값이 비어 있으면
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(i) { // 리스트이 값을 하나씩 꺼내서
            paintToDo(i.text); // 텍스트로 바꿔서 할일 기록하기
        });
    }
}

function init() {
    loadTodo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();