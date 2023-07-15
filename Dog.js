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
}

export default Dog