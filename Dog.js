// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        const {name, age, bio} = this
        return `
        <div class="dog-text-container">
            <h2 class="dog-info-text">${name}, ${age}</h2>
            <p class="dog-bio-text">${bio}</p>
        </div>
        `
    }

    getDogImgUrl() {
        return this.avatar
    }

    getBadgeHtml() {
        if(this.hasBeenSwiped) {
            return `<img src="images/badge-nope.png" class="badge-img" id="badge-img"></img>`
        }
        else if(this.hasBeenLiked) {
            return `<img src="images/badge-like.png" class="badge-img" id="badge-img"></img>`
        }
        
        return ''
    }
}

export default Dog