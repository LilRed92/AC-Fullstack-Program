
import characterData from "./data.js"
import Character from "./Character.js"
import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

//EXERCISE 7



const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById("attack-button").addEventListener("click", attack)

function attack() {
  wizard.getDiceHtml()
  orc.getDiceHtml()
  wizard.takeDamage(orc.currentDiceScore)
  orc.takeDamage(wizard.currentDiceScore)
  display()
}

function display() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
  document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

display()





// function renderCharacter(data) {
//   const {elementId, name, avatar, health, diceCount} = data
//   const diceHtml = getDiceHTML(diceCount)
//
//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//     <h4 class="name"> ${name} </h4>
//     <img class="avatar" src="${avatar}">
//     <p class="health">health: <b> ${health} </b></p>
//     <div class="dice-container">${diceHtml}</div>
//     </div>
// `
// }
//
// renderCharacter(hero)
// renderCharacter(monster)


//EXERCISE 3
// const dreamVacation = {
//   destination: "Moraine Lake, Rocky Mountains, Canada",
//   activity: "camping, hiking, and swimming",
//   companion: "my furbabies, Bella & Thyri for sure. Maybe some humans as well, most likely of the familial variety.",
//   when: "mid-summer",
//   duration: "2-4 weeks"
// }
//
// const {destination, activity, companion, when, duration} = dreamVacation
//
// console.log(`My dream vacation would be to travel to ${destination} during the ${when} for ${duration}. I would bring along with me ${companion} So we could all go ${activity}.`)


//EXERCISE 4
// function getDiceRollArray(diceCount) {
//   const newDiceRolls = []
//   for (let i = 0; i < diceCount; i++) {
//     newDiceRolls.push(Math.floor(Math.random() * 6) + 1 )
//   }
//   return newDiceRolls
// }
//
// console.log(getDiceRollArray(3))


//EXERCISE 5


//EXERCISE 8


//EXERCISE 9


//EXERCISE 10


//EXERCISE 11


//EXERCISE 12


//EXERCISE 13


//EXERCISE 14
