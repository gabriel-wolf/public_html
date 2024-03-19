// JavaScript code to handle medication selection and display

let selectedMeds = []; // Array to store selected medications

// Sample array of medications (replace with actual data)
const medications = [
    {
        name: "Tessalon Perles",
        details: "Tessalon Perles (benzonatate) is a non-narcotic cough medicine used to suppress coughs.",
        uses: ["Cough"],
        ingredients: [
            { name: "Benzonatate", dosage: "100 mg" },
            { name: "Inactive ingredients", dosage: "List available on product packaging" }
        ],
        sideEffects: ["Dizziness", "Headache", "Constipation"],
        imageUrl: "https://www.trusthubble.com/cdn/shop/files/Benzonatate_TESSALONPERLES.png?v=1683817569&width=1200",
        link: "https://example.com/tessalon-perles"
    },
    {
        name: "Zicam",
        details: "Zicam offers a range of cold remedies, including nasal sprays, nasal swabs, and oral tablets. These products often contain zinc, which is believed to reduce the duration of cold symptoms.",
        uses: ["Cold"],
        ingredients: [
            { name: "Zinc", dosage: "Varies by product" },
            { name: "Inactive ingredients", dosage: "Varies by product" }
        ],
        sideEffects: ["Nasal irritation", "Loss of smell (rare)"],
        imageUrl: "https://bjs.scene7.com/is/image/bjs/311767?$bjs-Zoom$",
        link: "https://example.com/zicam"
    },
    {
        name: "NyQuil",
        details: "NyQuil is an over-the-counter cold and flu medication that contains acetaminophen (pain reliever/fever reducer), dextromethorphan (cough suppressant), and doxylamine (antihistamine). It helps relieve symptoms such as cough, fever, headache, and runny nose.",
        uses: ["Cold", "Flu"],
        ingredients: [
            { name: "Acetaminophen", dosage: "650 mg" },
            { name: "Dextromethorphan", dosage: "30 mg" },
            { name: "Doxylamine succinate", dosage: "12.5 mg" },
            { name: "Inactive ingredients", dosage: "List available on product packaging" }
        ],
        sideEffects: ["Drowsiness", "Dry mouth", "Constipation"],
        imageUrl: "https://i5.walmartimages.com/seo/Vicks-NyQuil-Cold-and-Flu-Relief-Liquid-Medicine-over-the-Counter-Medicine-Cherry-12-fl-oz_1b8d84d4-30eb-41af-9f68-4845b7f6d52e.a645610c4b55d16fcfbfbbf14970f823.jpeg",
        link: "https://example.com/nyquil"
    },{
        name: "Tylenol",
        details: "Tylenol (acetaminophen) is a common over-the-counter pain reliever and fever reducer.",
        uses: ["Pain", "Fever"],
        ingredients: [
            { name: "Acetaminophen", dosage: "500 mg" },
            { name: "Inactive ingredients", dosage: "List available on product packaging" }
        ],
        sideEffects: ["Nausea", "Liver damage"],
        imageUrl: "https://m.media-amazon.com/images/I/71udwjn9lrL.jpg",
        link: "https://example.com/tylenol"
    },
    {
        name: "Ibuprofen",
        details: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever.",
        uses: ["Pain", "Inflammation", "Fever"],
        ingredients: [
            { name: "Ibuprofen", dosage: "200 mg" },
            { name: "Inactive ingredients", dosage: "List available on product packaging" }
        ],
        sideEffects: ["Stomach upset", "Ulcers"],
        imageUrl: "https://m.media-amazon.com/images/I/71byBwaWpuL._AC_UF1000,1000_QL80_.jpg",
        link: "https://example.com/ibuprofen"
    },
    {
        name: "Delsym",
        details: "Delsym is a cough suppressant containing dextromethorphan, which helps to suppress coughing.",
        uses: ["Cough"],
        ingredients: [
            { name: "Dextromethorphan", dosage: "Extended-release" },
            { name: "Inactive ingredients", dosage: "List available on product packaging" }
        ],
        sideEffects: ["Dizziness", "Drowsiness"],
        imageUrl: "https://m.media-amazon.com/images/I/61+yromFD7L._AC_UF1000,1000_QL80_.jpg",
        link: "https://example.com/delsym"
    },
    {
        name: "Afrin",
        details: "Afrin is a nasal spray used for relief of nasal congestion due to colds or allergies.",
        uses: ["Nasal Congestion"],
        ingredients: [
            { name: "Oxymetazoline", dosage: "0.05%" },
            { name: "Inactive ingredients", dosage: "List available on product packaging" }
        ],
        sideEffects: ["Nasal dryness", "Rebound congestion (with prolonged use)"],
        imageUrl: "https://m.media-amazon.com/images/I/71a9XtDFopL._AC_UF1000,1000_QL80_.jpg",
        link: "https://example.com/afrin"
    },
    {
        name: "Theraflu",
        details: "Theraflu is a multi-symptom cold and flu medicine that provides relief from symptoms such as cough, congestion, sore throat, headache, and fever.",
        uses: ["Cold", "Flu"],
        ingredients: [
            { name: "Acetaminophen", dosage: "650 mg" },
            { name: "Phenylephrine", dosage: "10 mg" },
            { name: "Dextromethorphan", dosage: "20 mg" },
            { name: "Inactive ingredients", dosage: "List available on product packaging" }
        ],
        sideEffects: ["Nausea", "Dizziness", "Insomnia"],
        imageUrl: "https://m.media-amazon.com/images/I/81Yx636B-9L._AC_UF1000,1000_QL80_.jpg",
        link: "https://example.com/theraflu"
    }
    // Add more medications as needed
];


// Function to populate medications grid
function populateMedGrid() {
    const medGrid = document.getElementById('medGrid');
    medGrid.innerHTML = ''; // Clear the grid
    medications.forEach(med => {
        const box = document.createElement('div');
        box.classList.add('med-box');
        
        // Create an image element for the medication
        const img = document.createElement('img');
        img.src = med.imageUrl; // Set the image source
        img.alt = med.name; // Set alt text for accessibility
        
        // Create a span element for the medication name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = med.name;
        nameSpan.classList.add('med-title');

        // Create a paragraph element for the uses
        const usesParagraph = document.createElement('p');
        usesParagraph.textContent = `Uses: ${med.uses.join(', ')}`;

        // Create a div for the ingredients list
        const ingredientsDiv = document.createElement('div');
        ingredientsDiv.classList.add('med-details');
        const ingredientsHeading = document.createElement('h4');
        ingredientsHeading.textContent = 'Ingredients:';
        const ingredientsList = document.createElement('ul');
        med.ingredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient.name} - ${ingredient.dosage}`;
            ingredientsList.appendChild(listItem);
        });
        ingredientsDiv.appendChild(ingredientsHeading);
        ingredientsDiv.appendChild(ingredientsList);
        
        // Append the elements to the box
        box.appendChild(img);
        box.appendChild(nameSpan);


        // Add click event listener to toggle medication selection
        box.addEventListener('click', () => toggleMed(med));
        
        // Append the box to the medications grid
        medGrid.appendChild(box);
    });
}

// Function to populate medications row
function populateMedicationsRow() {
    const medicationsRow = document.getElementById('medicationsRow');
    medications.forEach(med => {
        const box = document.createElement('div');
        box.classList.add('med-box');
        
        // Create a span element for the medication name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = med.name;
        nameSpan.classList.add('med-title'); // Add class for the medication title
        box.appendChild(nameSpan); // Append the title to the medication box
        
        // Create an image element
        const img = document.createElement('img');
        img.src = med.imageUrl; // Set the image source
        img.alt = med.name; // Set alt text for accessibility
        box.appendChild(img); // Append the image to the medication box
        
        // Add click event listener to toggle medication selection
        box.addEventListener('click', () => toggleMed(med));
        
        // Append the box to the medications row
        medicationsRow.appendChild(box);
    });
}


// Function to add or remove selected medication from the grid
// Function to add or remove selected medication from the grid
function toggleMed(med) {
    const index = selectedMeds.findIndex(item => item.name === med.name);
    if (index !== -1) {
        // Medication is already selected, remove it
        selectedMeds.splice(index, 1);
    } else {
        // Medication is not selected, add it
        selectedMeds.push(med);
    }
    renderMedGrid();
    renderSelectedMedsDetails();

    // Toggle class for the medication box in the medicationsRow grid
    const medicationsRow = document.getElementById('medicationsRow');
    const medicationBoxes = medicationsRow.querySelectorAll('.med-box');
    medicationBoxes.forEach(box => {
        if (box.textContent === med.name) {
            box.classList.toggle('selected');
        }
    });
}


function renderSelectedMedsDetails() {
    const medicationsUses = document.getElementById('medicationsUses');
    const medicationsIngredients = document.getElementById('medicationsIngredients');
    const medicationsSideEffects = document.getElementById('medicationsSideEffects');
    const sharedIngredientsWarning = document.getElementById('sharedIngredientsWarning');
    
    medicationsUses.innerHTML = '';
    medicationsIngredients.innerHTML = '';
    medicationsSideEffects.innerHTML = '';
    sharedIngredientsWarning.innerHTML = '';
    
    // Gather combined uses, ingredients, and side effects of selected medications
    let combinedUses = [];
    let combinedIngredients = [];
    let combinedSideEffects = [];
    let sharedIngredients = {}; // Added to store shared ingredients
    
    selectedMeds.forEach(med => {
        combinedUses = combinedUses.concat(med.uses);
        med.ingredients.forEach(ingredient => {
            if (ingredient.name !== "Inactive ingredients") {
                combinedIngredients.push({ name: ingredient.name, medName: med.name });
            }
        });
        combinedSideEffects = combinedSideEffects.concat(med.sideEffects);
    });
    
    // Remove duplicate entries
    combinedUses = [...new Set(combinedUses)];
    combinedIngredients = [...new Set(combinedIngredients.map(ingredient => ingredient.name))];
    combinedSideEffects = [...new Set(combinedSideEffects)];
    
    // Display combined uses
    medicationsUses.innerHTML = `${combinedUses.join(', ')}`;
    
    // Display combined ingredients
    medicationsIngredients.innerHTML = `${combinedIngredients.join(', ')}`;
    
    // Display combined side effects
    medicationsSideEffects.innerHTML = `${combinedSideEffects.join(', ')}`;
   
    // Check for shared ingredients among selected medications
    combinedIngredients.forEach(ingredient => {
        if (ingredient !== "Inactive ingredients") {
            const medsWithIngredient = selectedMeds.filter(med => med.ingredients.some(item => item.name === ingredient));
            if (medsWithIngredient.length > 1) {
                sharedIngredients[ingredient] = medsWithIngredient.map(med => med.name);
            }
        }
    });
    
    // Display shared ingredients warning
    for (const ingredient in sharedIngredients) {
        sharedIngredientsWarning.innerHTML += `Be careful, multiple medicines have "${ingredient}"<br>`;
    }
}



// Function to render medication grid
function renderMedGrid() {
    const medGrid = document.getElementById('medGrid');
    medGrid.innerHTML = ''; // Clear the grid
    selectedMeds.forEach(med => {
        const box = document.createElement('div');
        box.classList.add('med-box');
        // Create a span element for the medication name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = med.name;
        nameSpan.classList.add('med-title'); // Add class for the medication title

        
        // Create a paragraph element for medication uses
        const usesPara = document.createElement('p');
        usesPara.textContent = `Uses: ${med.uses.join(', ')}`;
        
        // Create a div for displaying ingredients
        const ingredientsDiv = document.createElement('div');
        ingredientsDiv.innerHTML = '<strong>Ingredients:</strong>';
        med.ingredients.forEach(ingredient => {
            const ingredientPara = document.createElement('p');
            ingredientPara.textContent = `${ingredient.name}: ${ingredient.dosage}`;
            ingredientsDiv.appendChild(ingredientPara);
        });
        
        // Append all elements to the box
        box.appendChild(nameSpan);
        box.appendChild(usesPara);
        box.appendChild(ingredientsDiv);
        
        // Add click event listener to toggle medication selection
        box.addEventListener('click', () => toggleMed(med));
        
        // Append the box to the medications grid
        medGrid.appendChild(box);
    });
}


// Populate medications row on page load
populateMedicationsRow();