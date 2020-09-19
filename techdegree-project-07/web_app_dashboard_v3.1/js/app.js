const send = document.getElementById('send');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const close = document.getElementsByClassName('close');

for(let i=0; i<close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.opacity= "0";
        setTimeOut(function () {
            div.style.display = "none";
        }, 600);
    };
}

send.addEventListener("click", (e) =>{
    e.preventDefault();
    let messages = [];
    if(user.value === "" && message.value === "") {
        alert("Please fill out user and message field before sending");
    } else if(user.value === ""){
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
})









































//Alert Notification
// const alertBox = document.querySelectorAll('.alert');
// const notificationBell = document.querySelector('.bell-border');
// const mainHeader = document.querySelector('.main-header');



// //Alert Notification
// const alertNotification = document.querySelectorAll('.alert');

// alertNotification.innerHTML =
// `<div class="alert-notification">
//     <p><strong>ALERT!</strong>THERE ARE<strong>6</strong><strong>NEW NOTIFICATIONS</strong></p><p class="alert-notication-close"></p>
// </div>`

// alertNotification.addEventListener ('click',(e) => {
//     const element = e.target;
//     if(elemnt.classList.contains('alert-notification-close')) {
//         alertNotification.style.display = 'none';
//     }
// });

// //User Search
// const user = document.getElementById('fieldUser');
// const message = document.getElementById("fieldMessage");
// const send = document.getElementById('send');

// send.addEventListener('click', (e) => {
//     if(user.value && message.value === ""){
//         alert("Please fill out user message fields before sending");
//     } else if (user.value === "") {
//         alert("Please fill out message field before sending");
//     } else if (message.value === "") {
//         alert("Please fill out user field before sending");
//     } else {
//         alert("Message sent to $(user.value)");
//     }
// });





