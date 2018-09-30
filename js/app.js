// Alert
const dashboardTab = document.querySelector('.dashboardTab');
const alertMessage = document.createElement('li');
alertMessage.className = 'alert';
alertMessage.textContent = 'Welcome, please click to remove this';


dashboardTab.insertBefore(alertMessage, dashboardTab.firstChild);

alertMessage.addEventListener('click', (event) => {
  alertMessage.style.display = 'none';
})


//search
$(document).ready(function() {
	$('#search').hideseek();
});

$(document).ready(function() {
	$('#searchUser').hideseek();
});

//submit button confirmation
const sendButton = document.getElementById('submit');
sendButton.addEventListener('click', (e) => {
    const sendConfirmation = document.createElement("p");
    sendConfirmation.setAttribute("id", "sentStatus");
    const sentStatus = document.querySelector('.messageUser #sentStatus');

    const parentDiv = document.querySelector('.messageUser');
    const message = document.querySelector('#message');
    const user = document.querySelector('#user');

    let timeOut;
    function startTimeOut() {
        timeOut = window.setTimeout(() => {sentStatus.remove()}, 3000);
    };
    function stopTimeOut() {
        window.clearTimeout(timeOut);
    };

    if (sentStatus !== null && sentStatus.textContent === "Message Successfully Sent"  && message.value === "" || sentStatus !== null && sentStatus.textContent === "Message Successfully Sent"  && user.value === "") {
        sentStatus.textContent = "Error: No Message/User Entered";
        sentStatus.style.color = "red";
        stopTimeOut();
    } else if (sentStatus !== null && sentStatus.textContent === "Error: No Message/User Entered" && message.value && user.value) {
        sentStatus.textContent = "Message Successfully Sent";
        sentStatus.style.color = "green";
        startTimeOut();
        message.value = "";
        user.value = "";

    } else if(sentStatus === null && message.value === "" || sentStatus === null && user.value === "") {
        parentDiv.insertBefore(sendConfirmation, e.target);
        sendConfirmation.textContent = "Error: No Message/User Entered";
        sendConfirmation.style.color = "red";
    } else if(sentStatus === null && message.value && user.value) {
        parentDiv.insertBefore(sendConfirmation, e.target);
        sendConfirmation.textContent = "Message Successfully Sent";
        startTimeOut();
        message.value = "";
        user.value = "";
    };
});




//widget settings
document.querySelectorAll(".switch").forEach(function(theSwitch) {
    theSwitch.addEventListener("click", handleClickEvent, false);
  });

function handleClickEvent(e) {

    const switchCircle1 = e.target.querySelector('#switchCircle1');
    const switchCircle2 = e.target.querySelector('#switchCircle2');

    if (e.target.getAttribute("aria-checked") == "true") {
        switchCircle1.style.left = "-21px";
        switchCircle2.style.left = "-21px";
        e.target.setAttribute("aria-checked", "false");
    } else if (e.target.getAttribute("aria-checked") == "false") {
        switchCircle1.style.left = "29px";
        switchCircle2.style.left = "29px";
        e.target.setAttribute("aria-checked", "true");
    }
};
