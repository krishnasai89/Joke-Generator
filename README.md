### Overview
This project is simple jokegenerator build with ReactJS.The “Joke” file is a functional component and contains a state variable Joke, which initially set to an empty string, and depending upon the state of the Joke, the output gets rendered. The Component outputs the “Button” component which on click generates a joke. The “Button” component that is getting rendered is also an imported functional component that outputs a button element. We are also passing some props to the “Button” component, which is a method named callAPI. The prop is fetching the Joke from API whenever the code is being fetched.
### Prerequisites
- Node.js
- npm
### Installation
1.Clone the repository:
```cmd
git clone https://github.com/krishnasai89/Joke-Generator.git
cd jokegenerator
```
2.Install the dependencies:
```cmd
npm install
```
### Usage
1.Start the development server:
```cmd
npm start
```
2.Open http://localhost:3000 to view it in the browser.
