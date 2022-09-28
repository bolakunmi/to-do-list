// import {
//   dragmove
// } from '@knadh / dragmove';

//initialize
let input = document.querySelector("main input");
let glow_on_focus = document.querySelector(".glow_on_focus");
let add = document.querySelector(".add");
let pending = document.querySelector(".pending");
let pending_items = pending.children;
let completed_button = document.querySelector(".completed_button");
let completed = document.querySelector(".completed");
let pending_li = document.querySelectorAll(".pending li");

localStorage.setItem("completed", ["wkdnfkwe", "iwehfioqen"]);

// automatically focus on page load
input.focus();
dragabout()
// simple glow effect for the whole box
input.addEventListener("focus", function () {
  glow_on_focus.style = "box-shadow: 0px 0px 10px 0px rgb(30, 185, 30)";
});

input.addEventListener("blur", function () {
  glow_on_focus.style = "box-shadow: 0px 0px 0px 0px rgb(30, 185, 30)";
});


//button functions
function attachbuttons(li) {
  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "remove";
  li.appendChild(remove);

  // let up = document.createElement("button");
  // up.className = "up";
  // up.textContent = "up";
  // li.appendChild(up);
}
//add buttons to existing elements
for (let i = 0; i < pending_items.length; i++) {
  attachbuttons(pending_items[i]);
  pending_items[i].classList.add("animated_small");
}

var up = document.querySelectorAll(".up");
var remove = document.querySelectorAll(".remove");

//create new elements
add.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerHTML = input.value;
  li.draggable = true;
  console.log(li.draggable);
  console.log(pending_items)
  if (input.value) {
    pending.appendChild(li);
    li.classList.add("animated_small");
    input.value = "";
  }
  attachbuttons(li);
  dragabout()
});

//highlight selected list
pending.addEventListener("mouseover", function () {
  for (let i = 0; i < pending.children.length; i++) {
    pending.children[i].addEventListener("click", function () {
      for (let j = 0; j < pending.children.length; j++) {
        pending.children[j].classList.remove("completed_clicked");
      }
      pending.children[i].classList.add("completed_clicked");
      //completed button
      completed_button.addEventListener("click", function () {
        let li_clicked = document.querySelector(".completed_clicked");
        let ul = li_clicked.parentNode;
        ul.removeChild(li_clicked);

        li_clicked.classList.remove("completed_clicked");

        let li = document.createElement("li");
        li.innerHTML = li_clicked.firstChild.textContent;
        completed.appendChild(li);
      });
    });
  }

  //look here closely
  for (let i = 0; i < pending_items.length; i++) {
    var up = document.querySelectorAll(".up");
    var remove = document.querySelectorAll(".remove");

    //move up

    //remove
    remove[i].addEventListener("click", function () {
      console.log("clicked");
      let li = remove[i].parentNode;
      let ul = li.parentNode;

      ul.removeChild(li);
      console.log("moved up");
    });
  }
});


function dragabout() {
  for (let i = 0; i < pending_items.length; i++) {
    console.log(pending_items)
    pending_items[i].addEventListener("dragstart", function (e) {
      return carrying = e.target
    });

    pending_items[i].addEventListener("dragover", function (e) {
      console.log(Array.from(e.target.parentNode.children))
      e.preventDefault();

      let children = Array.from(e.target.parentNode.children);

      if (children.indexOf(e.target.parentNode) > children.indexOf(carrying))
        e.target.after(carrying);
      else
        e.target.before(carrying);
    });
  }
}


/*
pending_items.addEventListener('dragstart', function () {

})

******************************8
var row;
function start() {
  row = event.target;
}

function dragover() {
  var e = event;
  e.preventDefault();

  let children = Array.from(e.target.parentNode.parentNode.children);

  if (children.indexOf(e.target.parentNode) > children.indexOf(row))
    e.target.parentNode.after(row);
  else
    e.target.parentNode.before(row);
}
******************************
*/