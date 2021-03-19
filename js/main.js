//strict mode 사용
'use strict'; 

let memoList = [];
let inputButton = document.querySelector(".input_btn"); //input_btn을 inputButton 변수에 할당
inputButton.addEventListener("click", addMemo); //input_btn을 누르면 addMemo 함수 실행

function addMemo() {
    let memo = document.querySelector(".input_list").value; //input_list클래스에 값 받아와서 memo 변수에 할당
    if (memo != null) { //memo가 null이 아닐때 
        memoList.push(memo); 
        document.querySelector(".input_list").value = "";
        document.querySelector(".input_list").focus(); //push한 다음 value 삭제, focus 적용
    }
    showList();
}

function shoqList() {
    let list = "<ul>"; //list에 할일 표시
    for(let i = 0; i < memoList.length; i++) {
        list += "<li>" + memoList[i] + "<span class='close' id=" + i + ">" + "\u00D7"  + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".memo_list").innerHTML = list;

    let deleteButton = document.querySelectorAll(".close"); //클래스가  close인 모든 요소를 가져와서 deleteButton에 저장
    for( let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteMemo); //클릭할 경우 해당 item 삭제(deleteMemo 함수 실행)
    }
}

function deleteMemo() {
    let id = this.getAttribute("id");
    memoList.splice(id, 1); //splice 함수를 사용하여 선택한 id부터 1만큼 요소 삭제
    showList();
}

let CheckList = document.querySelector(".memo_list");
CheckList.addEventListener("click", event => {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle('checked'); 
        //classList의 toggle메서드를 사용하여 클릭하면 checked가 있을때 삭제, 없으면 추가하기
    }
})