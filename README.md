# Fun Facts Generator App

## Overview
The **Fun Facts Generator App** is a simple and interactive web application that displays random fun facts about a topic of your choice. Built using **HTML, CSS, and JavaScript**, this app allows users to explore fun facts and learn about **prompt engineering, context setting, and handling AI limitations**.

## Features
- **Random Fun Fact Generation**: Displays a random fun fact at the click of a button.
- **Customizable Topics**: Users can modify the facts to suit their interests.
- **Lightweight & Fast**: A simple single-page web application.
- **Easy Hosting on GitHub Pages**: Deploy the app in minutes and share with others.

## Live Demo
Check out the live demo here: **[Click Here](https://shenalsen.github.io/genai101/)**

## How It Works
1. Open the app in your web browser.
2. Click the **"Generate Another Fun Fact"** button.
3. A new random fun fact appears each time you click.
4. Share the app with friends!

## Installation & Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/fun-facts-app.git
   cd fun-facts-app
   ```
2. **Open `index.html` in a browser**
3. **To edit facts**, modify the `facts` array inside `script.js`

## Hosting on GitHub Pages
1. Push your repository to GitHub.
2. Go to **Settings > Pages** in your repository.
3. Under **Branch**, select `main` and save.
4. Your app will be live at **https://yourusername.github.io/fun-facts-app/**

## Customization
- Modify the `facts` array in `script.js` to add your own facts.
- Customize styles in `style.css` to change the design.
- Experiment with JavaScript to add animations or new features.

## Example Code
Here’s a snippet of the JavaScript used:
```js
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
```

## Troubleshooting
- **Fun facts not displaying?**
  - Ensure JavaScript is correctly linked in `index.html`.
  - Check that each fact is enclosed in quotes and separated by commas.
- **GitHub Pages not working?**
  - Confirm the source branch is set to `main` in GitHub Pages settings.
  - Make sure `index.html` is in the root directory.

## License
This project is open-source and available under the **MIT License**. Feel free to use, modify, and distribute it as you like.

## Contributing
If you'd like to contribute, feel free to submit a pull request! 🚀
