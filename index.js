// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from "./Dog.js"


const dogContainer = document.getElementById('dog-container') //html goes in here, change background as well
const badgeImg = document.getElementById('badge-img') //.src = " images/badge-nope.png ";
const nopeBtn = document.getElementById('nope-btn')
const likeBtn = document.getElementById('like-btn')

document.addEventListener("click", (e) => {
    console.log('click')
    console.log(e.target)
    if(e.target.closest == likeBtn) {
        console.log('like button has been clicked')
    }


})

const dog = new Dog(dogs[2])

function renderDogSection(dog) {
    dogContainer.innerHTML = dog.getDogHtml()
    dogContainer.style.background = `url(${dog.getDogImgUrl()})` 
    dogContainer.style.backgroundSize = `cover`
    dogContainer.style.backgroundPosition = `center`
}

renderDogSection(dog)



