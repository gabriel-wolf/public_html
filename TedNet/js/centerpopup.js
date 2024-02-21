// Function to open the popup
function openPopup() {
    var popup = document.getElementById("centerpopup");
    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("centerpopup");
    popup.style.display = "none";
}

// Add event listener for clicking the close button
var closeButton = document.getElementById("close-button");
if (closeButton) {
    closeButton.addEventListener("click", closePopup);
}

var showPopupButton = document.getElementById("show-popup-button");
if (showPopupButton) {
    showPopupButton.addEventListener("click", openPopup);
}

  function showLarge1() {
    // Display the overlay
    document.getElementById("overlay1").style.display = "flex";

    // Hide the overlay after 3 seconds (adjust as needed)
    setTimeout(function() {
      document.getElementById("overlay1").style.display = "none";
    }, 3000);
  }


  function showLarge2() {
    // Display the overlay
    document.getElementById("overlay2").style.display = "flex";

    // Hide the overlay after 3 seconds (adjust as needed)
    setTimeout(function() {
      document.getElementById("overlay2").style.display = "none";
    }, 3000);
  }


  function showLarge3() {
    // Display the overlay
    document.getElementById("overlay3").style.display = "flex";

    // Hide the overlay after 3 seconds (adjust as needed)
    setTimeout(function() {
      document.getElementById("overlay3").style.display = "none";
    }, 3000);
  }
