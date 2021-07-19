//strict mode 사용
'use strict';

let itemList = [];
let inputButton = document.querySelector(".input__button"); //input__button을 inputButton 변수에 할당
inputButton.addEventListener("click", addItem); //input__button을 누르면 addItem 함수 실행

function addItem() {
    let item = document.querySelector(".item").value; //item클래스에 값 받아와서 item 변수에 할당
    if (!item) {
        alert("할일을 써주세요!");
    } else {
        console.log(item)
        itemList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus(); //push한 다음 value 삭제, focus 적용
    }
    showList();
}

function showList() {
    let list = "<ul>"; //list에 할일 표시
    for (let i = 0; i < itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".item__list").innerHTML = list;

    let deleteButton = document.querySelectorAll(".close"); //클래스가  close인 모든 요소를 가져와서 deleteButton에 저장
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteItem); //클릭할 경우 해당 item 삭제(deleteItem 함수 실행)
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1); //splice 함수를 사용하여 선택한 id부터 1만큼 요소 삭제
    showList();
}

let CheckList = document.querySelector(".item__list");
CheckList.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('checked');
        //classList의 toggle메서드를 사용하여 클릭하면 checked가 있을때 삭제, 없으면 추가하기
    }
})