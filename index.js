const facts = [
    "Cats can jump up to six times their height.",
    "The Eiffel Tower can grow up to 15 cm taller in the summer.",
    "Bananas are berries, but strawberries are not.",
    "Honey never spoils; archaeologists have found 3000-year-old honey that's still edible.",
    "There are more stars in the universe than grains of sand on Earth."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[randomIndex];
}
