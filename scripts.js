// let cohort = {
//     name: "Nestor",
//     age: 28,
//     sex: "Male",
// }


let words = ["apple", "bat","calendar","dispel","effort","flag","gnosis","helicopter","ingenious","jurassic","ketones"]

// // console.log(Object.values(cohort));

let TextBox = document.getElementById("TextBox");
const PressMe = document.getElementById("Press");
PressMe.addEventListener("click", generate);

function generate () {
    TextBox.textContent = myFilter.join(' ');
}

// function generate() {
//     let myArray = words.reduce((accumulator) => {
//         let index = Math.floor(Math.random() * words.length-1);
//         accumulator.push(words[index]);
//         return accumulator;
//     },[]);
//     console.log(myArray.join(' '));
// }



const filterThis = ["array", "should", "have", "at", "least", "five", "items", "bart", "apostrophe", "hell"];

let myFilter = filterThis.filter(item => item.includes('a') && item.length < 5);



