// RootElement <= Box <= instances


class RootElement {
    constructor(tagName='div') {
        this.$el = document.createElement(tagName)
        this.$el.style.marginBottom = '10px'
    }

    hide() {
        this.$el.style.display = 'none'
    }
}


class Box extends RootElement {
    constructor(color, size=150, tagName) {
        super(tagName)
        this.color = color
        this.size = size
    }

    create() {
        console.log(this.$el)
        this.$el.style.background = this.color
        this.$el.style.width = this.$el.style.height = `${this.size}px`

        document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.$el)

        return this
    }
}


const redBox = new Box('red', 100, 'div').create()
const blueBox = new Box('blue', 100, 'div').create()