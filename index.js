import dogs from './data.js'
import Dog from "./Dog.js"


const dogContainer = document.getElementById('dog-container') //html goes in here, change background as well
const nopeBtn = document.getElementById('nope-btn')
const likeBtn = document.getElementById('like-btn')

//Upadated in newDog()
let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

document.addEventListener("click", (e) => {
    if(e.target === nopeBtn) {
        currentDog.hasBeenSwiped = true
        newDog()
    }
    else if(e.target === likeBtn) {
        currentDog.hasBeenLiked = true
        newDog()
    }

})


function newDog() {
    currentDogIndex++

    if(currentDogIndex <= dogs.length)
        dogContainer.innerHTML += currentDog.getBadgeHtml()

    setTimeout(() => {    
    if(currentDogIndex < dogs.length) {
        currentDog = new Dog(dogs[currentDogIndex])
        renderDogSection(currentDog)
    }
    else {
        dogContainer.innerHTML = `
        <h2>Check back later for more dogs!</h2>
        `
        dogContainer.style.background = 'whitesmoke'
        nopeBtn.disabled = true
        likeBtn.disabled = true
    }},500)
}

function renderDogSection(dog) {
    dogContainer.innerHTML = dog.getDogHtml()
    dogContainer.style.background = `url(${dog.getDogImgUrl()})` 
    dogContainer.style.backgroundSize = `cover`
    dogContainer.style.backgroundPosition = `center`
}

renderDogSection(currentDog)


