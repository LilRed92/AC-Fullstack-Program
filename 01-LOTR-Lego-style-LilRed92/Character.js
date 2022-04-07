import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

function Character(data) {
  Object.assign(this, data)

  this.diceArray= getDicePlaceholderHtml(this.diceCount)

  this.getDiceHtml = function(diceCount) {
	this.currentDiceScore = getDiceRollArray(this.diceCount)
	this.diceArray = this.currentDiceScore.map(function(number) {
		return `<div class="dice">${number}</div>`
	}).join("")
  }

  this.takeDamage = function(attackScoreArray) {
	  console.log(`${this.name}: ${attackScoreArray}`)
  }

  this.getCharacterHtml = function() {
	const {elementId, name, avatar, health, diceCount, diceArray} = this
	const diceHtml = this.getDiceHtml(diceCount)


	return `
		<div class="character-card">
		<h4 class="name"> ${name} </h4>
		<img class="avatar" src="${avatar}">
		<p class="health">health: <b> ${health} </b></p>
		<div class="dice-container">${diceArray}</div>
		</div>
	`
  }
}

export default Character
