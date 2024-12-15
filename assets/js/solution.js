// DECLARING CONSTANTS DIALOG
// CREATE
const buttonEnter = document.querySelectorAll(".btn-open");
const buttonClose = document.querySelectorAll(".btn-close");
const dialogSolutions = document.querySelectorAll(".dialog-solutions-js");

// DECLARING CONSTANTS MAP
// CREATE
const message = document.getElementById("text-container");
const states = document.querySelectorAll("path");
const body = document.querySelector("body");

// CALLING DIALOG
// READ
function openModal(button, dialog) {
    button.addEventListener('click', () => {
        dialog.show();
    });
}

// ITERS EACH OPEN BUTTON TO ITS CORRESPONDING MODAL
buttonEnter.forEach((button, index) => {
    openModal(button, dialogSolutions[index]);
});

// ADD A CLICK EVENT LISTENER TO EACH CLOSE BUTTON
// UPDATE
buttonClose.forEach(buttonsClose => {
    buttonsClose.addEventListener('click', () => {
        closeModal(buttonsClose);
    });
});

// CLOSING DIALOG 
// DELETE
function closeModal(button) {
    button.closest(".dialog-solutions-js").close();
}

// LOOP THROUGH EACH ELEMENT IN THE STATES
// READ
states.forEach((el) => 
    el.addEventListener("mouseover", (events) => {
        events.target.className = ("enabled");
        message.classList.add("active");
        message.innerHTML = events.target.id;
    })
);

// FOLLOW THE MOUSE MOVEMENT
// UPDATE
body.onmousemove = function (e) {
    message.style.left = e.pageX + "px";
    message.style.top = (e.pageY - 70) + "px";
}

// DELETE THE ELEMENT WHEN LEAVING STATES
// DELETE
states.forEach((el) => {
    el.addEventListener("mouseout", () => {
        message.classList.remove("active");
    })
})
