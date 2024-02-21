const notification = document.getElementById("notification");
const waitTime = parseInt(notification.getAttribute("wait"), 10); // Get the custom wait time from the attribute
const fadeTime = parseInt(notification.getAttribute("fade"), 10); // Get the custom wait time from the attribute


// Function to show the notification
function showNotification() {
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, fadeTime); // 5000 milliseconds (5 seconds)
}

// Set a timeout to display the notification after the custom wait time
setTimeout(showNotification, waitTime);


