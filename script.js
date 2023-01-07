//cards array of objects
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]
let cardsChosen = []
let cardsChosenId = []
let count = 0

//create the board of the game (12 photos)
const createBoard = (imageobject) => {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png') //default image for all photos before clicking on them
        card.setAttribute('data-id', i)  //<img src="" data-id = i/>
        card.addEventListener('click', flipCard) //if clicked flip it
        imageobject.appendChild(card)
    }
}
//flipping the photo
const flipCard = function () {
    let cardId = this.getAttribute('data-id') //this refer to image clicked
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardsChosenId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }

}
//check match
const checkForMatch = function () {
    let cards = document.querySelectorAll("img")
    let result = document.querySelector("span")
    if (cardsChosenId[0] == cardsChosenId[1]) {
        alert("you have chosen the same card")
        cards[cardsChosenId[0]].src = "images/blank.png"
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        cards[cardsChosenId[0]].setAttribute("src", "images/white.png")
        cards[cardsChosenId[1]].setAttribute("src", "images/white.png")
        cards[cardsChosenId[0]].removeEventListener("click", flipCard)
        cards[cardsChosenId[1]].removeEventListener("click", flipCard)
        result.innerHTML = ++count
    }
    else {
        cards[cardsChosenId[0]].src = "images/blank.png"
        cards[cardsChosenId[1]].src = "images/blank.png"
    }
    cardsChosenId = []
    cardsChosen = []
    if (count == 6) {
        if (prompt("congratulation you got them all right!\nif you wanna play again enter yes") == 'yes') {
            location.reload()
        }
    }
}

window.addEventListener("load", () => {
    //selectors
    let imageobject = document.querySelector("div")
    //do
    cardArray.sort(() => 0.5 - Math.random()) //shortcut for sort an array elements randomly
    createBoard(imageobject)

})