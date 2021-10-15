"use strict";
let listContent = document.getElementById("listContent");
let popUp = document.getElementById("popUp");
let container = document.querySelector(".container");
let listName = document.getElementById("listName");
let head = document.querySelector(".head");
let main = document.getElementById("main");
let popUp2 = document.getElementById("popUp2");
function addList() {
  listContent.style.display = "none";
  popUp2.style.display = "none";
  popUp.style.display = "block";
  addBtn.style.display = "inline";
  head.style.filter = "blur(10px)";
}

function cancel() {
  popUp.style.display = "none";
  popUp2.style.display = "none";
  head.style.filter = "blur(0px)";
  blr.removeAttribute("class", "active");
}

let arrList = [];
function add() {
  if (listName.value.length > 0) {
    const list1 = { id: arrList.length, name: listName.value };
    arrList.push(list1);
    const listEntry = document.createElement("div");
    listEntry.setAttribute("class", "listEffect");
    listEntry.setAttribute("id", arrList.length);
    for (let i = 0; i < arrList.length; i++) {
      listEntry.setAttribute("id", `${i}`);
      listEntry.innerHTML = `<div>
      <p >${arrList[i].name}</p>
      <hr>
      <div class="subList subList${i}" id="cardSubList"></div>
      <div id= foot>
      <i class="fas fa-trash-alt" id="${i}" onclick="removeCard(this.id)"></i>
      <i class="fas fa-plus-circle" id="${i}" onclick="addSubList(this.id)" ></i>
      </div>
      </div>`;
      main.appendChild(listEntry);
      head.style.filter = "blur(0px)";
      popUp.style.display = "none";
      blr.removeAttribute("class", "active");
      listName.value = "";
    }
  } else {
  }
}
function removeCard(id) {
  document.getElementById(id).remove(id);

  console.log(id);
}
function addSubList(btnid) {
  popUp2.style.display = "block";
  head.style.filter = "blur(10px)";
  blr.setAttribute("class", "active");
  let btn2 = document.getElementsByClassName("sub")[0];
  btn2.setAttribute("id", btnid);
  console.log(btnid);
  // console.log(btn2);
}
function addItem(id) {
  // console.log(bid);
  const subList = document.querySelector(`.subList${id}`);
  console.log(subList);
  const li = document.createElement("li");
  li.classList = "listStyle";
  li.innerHTML = document.getElementById("itemName").value;
  subList.appendChild(li);
  popUp2.style.display = "none";
  popUp.style.display = "none";
  head.style.filter = "blur(0px)";
  blr.removeAttribute("class", "active");
  document.getElementById("itemName").value = "";
  li.addEventListener(
    "click",
    () => (li.style.textDecoration = "line-through")
  );
}

function cancel2() {
  popUp2.style.display = "none";
  popUp.style.display = "none";
  head.style.filter = "blur(0px)";
  blr.removeAttribute("class", "active");
}

var blr = document.querySelector(".blur");
function toggle() {
  blr.setAttribute("class", "active");
}

// function removeCard() {
// console.log(main);
// }
// removeCard();
