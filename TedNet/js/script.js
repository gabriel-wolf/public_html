const storyContainer = document.getElementById("story");

function displayPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll("#story > div");
    pages.forEach(page => page.style.display = "none");

    // Display the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = "block";

    window.location.hash = pageId;
}

function startGame() {
    const initialPage = window.location.hash.substring(1);
    displayPage(initialPage || "home"); // Show the initial page
}

function goToPage(button) {
    const nextPageId = button.getAttribute("dnp");
    displayPage(nextPageId); // go to next page based on what in dnp

    window.location.hash = nextPageId;
}


// Start the game when the page loads
startGame();


// add click listener for all button dnp
const buttons = document.querySelectorAll("button[dnp]");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        goToPage(button);
    });
});

