// create 64 x 64 grid
// let the user choose the number of boxes
// change color when user's mouse goes over the boxes

const userBtn = document.createElement("button");
userBtn.setAttribute("id","user-btn");
userBtn.textContent = "CLICK ME";
document.body.append(userBtn);
const container = document.createElement('div');
container.setAttribute("id","div-container");
document.body.append(container);
let createdDiv = "";
const createDiv = () => {
    for (let i=0; i<64;i++) {
        createdDiv = document.createElement("div");
        createdDiv.setAttribute("class","div");
        container.appendChild(createdDiv);
    }};
createDiv()
let divs = document.querySelectorAll(".div");
divs = Array.from(divs);
for (let div of divs) {
    div.addEventListener("mouseover",() => div.setAttribute("style","background:rgb(253, 106, 21);"));
};
let newDiv = "";
let newContainer = "";
userBtn.addEventListener("click",() => {
    do
       answer = prompt('Enter the number(1 to 100): ');
       
    while(parseInt(answer) > 100);
    answer = parseInt(answer);
    container.remove()
});
userBtn.addEventListener("click", () => {
    newContainer = document.createElement('div');
    newContainer.setAttribute("id","new-container");
    document.body.appendChild(newContainer);
    for (let i=0; i<answer && i <100;i++) {
        newDiv = document.createElement("div");
        newDiv.setAttribute("class","new-div");
        newContainer.appendChild(newDiv);
    };

})

userBtn.addEventListener("click", () => {
    let createdNewDivs = document.querySelectorAll(".new-div");
    createdNewDivs = Array.from(createdNewDivs);
    for (let newDiv of createdNewDivs) {
    newDiv.addEventListener("mouseover",() => newDiv.setAttribute("style","background:rgb(253, 106, 21);"));
};
})





