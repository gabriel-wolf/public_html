
const words = [
    "Apple",
    "House",
    "Car",
    "Tree",
    "Dog",
    "Cat",
    "Chair",
    "Table",
    "Sun",
    "Moon",
    "Water",
    "Food",
    "Book",
    "Phone",
    "Road",
    "Door",
    "Window",
    "Hat",
    "Shoe",
    "Hand",
    "Heart",
    "Eye",
    "Nose",
    "Ear",
    "Mouth",
    "Smile",
    "Laugh",
    "Cry",
    "Walk",
    "Run",
    "Jump",
    "Swim",
    "Sing",
    "Dance",
    "Sleep",
    "Wake",
    "Read",
    "Write",
    "Love",
    "Friend",
    "Family",
    "Time",
    "Money",
    "Work",
    "School",
    "Play",
    "Game",
    "Music",
    "Movie",
    "Color",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Happy",
    "Sad",
    "Angry",
    "Tired",
    "Cold",
    "Hot",
    "Big",
    "Small",
    "Tall",
    "Short",
    "Old",
    "Young",
    "Fast",
    "Slow",
    "Hard",
    "Soft",
    "Wet",
    "Dry",
    "Bright",
    "Dark",
    "Good",
    "Bad",
    "Right",
    "Wrong",
    "True",
    "False",
    "Day",
    "Night",
    "Morning",
    "Evening",
    "Month",
    "Year",
    "Hour",
    "Minute",
    "Second",
    "Today",
    "Tomorrow",
    "Yesterday",
    "Here",
    "There"
  ];


const displayedWord = document.getElementById("displayedWord");
const flashingText = document.getElementById("flashingText");


// Function to generate and display a random word
function displayRandomWord() {
  flashingText.style.display = 'block';

    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    displayedWord.textContent = randomWord;

    // Create a new FileReader
    const reader = new FileReader();

    // Define the callback function when the file is loaded
   
}

// Add an event listener for key press
document.addEventListener("keypress", displayRandomWord);


