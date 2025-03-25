
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let x = 0
let player = {
    name: "Account",
    chips: x
}
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": Rs " + player.chips

function getrandomcard(){
    let randomno =  Math.floor(Math.random()*13) +1
    if (randomno === 1){
        return 11
    }
    else if(randomno > 10){
        return 10
    }
    else {
    return randomno
}
}

startGame.onclick = function startGame() {
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
     isAlive = true
     hasBlackJack = false
      cards = [firstcard,secondcard]
      sum = firstcard + secondcard
    renderGame()
}

 function renderGame() {
     document.querySelector("#cards-el").textContent = "Cards: "

     for(let i =0; i < cards.length; i ++){
        document.querySelector("#cards-el").textContent +=  cards[i] + " "
    
}
    document.getElementById("sum").innerHTML = "Sum: " + sum
if (sum <= 20 ){
    message= "Do you want to draw a new card?"
   
}
else if (sum === 21) {
    message = "You've got BlackJack!"
    hasBlackJack = true
    player.chips += 100
    playerEl.textContent = player.name + ": Rs " + player.chips
}
else {
    message = "You're out of the game!"
    isAlive = false
    player.chips -= 10
    playerEl.textContent = player.name + ": Rs " + player.chips
}
document.getElementById("message-el").innerHTML = message
// console.log(message)
} 

newcard.onclick = function newcard() {
    // document.querySelector("#message-el").textContent = "Drawing a new card!"
    if( isAlive === true && hasBlackJack === false){
        let card = getrandomcard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
}
}


// mytaste = ["Aditya Roy",18,false]

// mytaste.pop()
// console.log(mytaste)

// for ( let i =10; i < 101; i +=10){
//     console.log(i)
// }

// let cardno = ["hello","my name","is","Aditya"]

// for(let i =0; i < cardno.length; i ++){
//     // console.log(cardno[i])
//     document.getElementById("suuum").textContent += " " + cardno[i]
// }


// let p1time = 122
// let p2time = 192
// function totalracetime() {
// if (p1time < p2time){
//     return p2time
// }
// else if (p2time < p1time){
//     return p1time
// }
// else {
//     return p1time
// }
// }

// let toatl = totalracetime()

// console.log(toatl)


// function rolldice(){
//     let randomno =  Math.floor(Math.random()*6) +1
//     return randomno

// }
// console.log(rolldice())


// let hassolvedchallenge = false
// let hashintsleft = false

// if( hassolvedchallenge=== false && hashintsleft === false){
//     showsolution()
// }

// function showsolution(){
//     console.log("showing solution....")
// }


// castlelist ={
//     price: 190,
//     place: "mauritius",
//     pernight: true,
//     inclusives: ["drink","dinner"]
// }

// console.log(castlelist.place)
// console.log(castlelist.inclusives)


// let  largecount = ["touva","india","USA","indonesia","monaco"]

// largecount.pop()
// largecount.push("Pakistan")
// largecount.shift()
// largecount.unshift("China")
// for(i = 0; i < largecount.length; i++){
// console.log(largecount[i])
// }


// let game = ["Rock","Paper","Scissor"]

// let random =Math.floor( Math.random()*2)+1

// console.log(random)
//     console.log(game[random])


let fruit = ["apple","orange","apple","apple","orange"]

for( i =0;  i<fruit.length;i++){
if(fruit[i] ==="orange"){
    document.getElementById("ora").textContent += "orange"
}
else{
    document.getElementById("app").textContent += "apple"
}
}