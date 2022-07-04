//initialize
let input = document.querySelector("main input");
let add = document.querySelector(".add");
let pending = document.querySelector(".pending");
let pending_items = pending.children;

let completed_button = document.querySelector(".completed_button");
let completed = document.querySelector(".completed");

//button functions





function attachbuttons(li) {
  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "remove";
  li.appendChild(remove);


  let up = document.createElement("button");
  up.className = "up";
  up.textContent = "up";
  li.appendChild(up);

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
  if (input.value) {

    pending.appendChild(li);
    li.classList.add("animated_small");
    input.value = "";
  }
  attachbuttons(li);
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
    up[i].addEventListener("click", function () {
      console.log("clicked");
      let li = up[i].parentNode;
      let prevli = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevli) {
        ul.insertBefore(li, prevli);
        console.log("moved up");
      }
    });


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